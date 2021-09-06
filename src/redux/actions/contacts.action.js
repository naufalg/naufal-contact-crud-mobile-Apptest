import {
  CREATE_CONTACTS_REQUEST,
  CREATE_CONTACTS_SUCCESS,
  CREATE_CONTACTS_ERROR,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_ERROR,
  GET_CONTACTS_BY_ID_REQUEST,
  GET_CONTACTS_BY_ID_SUCCESS,
  GET_CONTACTS_BY_ID_ERROR,
  UPDATE_CONTACTS_REQUEST,
  UPDATE_CONTACTS_SUCCESS,
  UPDATE_CONTACTS_ERROR,
  DELETE_CONTACTS_REQUEST,
  DELETE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_ERROR,
} from '../constants/contacts.types';
import axios from 'axios';

import {URL_API} from '../../config';
import Toast from 'react-native-simple-toast';

const url = URL_API;

export const getContacts = () => async dispatch => {
  try {
    dispatch({type: GET_CONTACTS_REQUEST});

    const res = await axios.get(`${url}`);
    const {data} = await res.data;

    dispatch({type: GET_CONTACTS_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: GET_CONTACTS_ERROR, error: error});
  }
};

export const getContactByid = id => async dispatch => {
  try {
    dispatch({type: GET_CONTACTS_BY_ID_REQUEST});
    const res = await axios.get(`${url}/${id}`);
    const {data} = await res.data;

    dispatch({type: GET_CONTACTS_BY_ID_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: GET_CONTACTS_BY_ID_ERROR, error: error});
  }
};

export const createContactAction = input => async dispatch => {
  try {
    dispatch({type: CREATE_CONTACTS_REQUEST});

    const res = await axios.post(`${url}`, input);
    dispatch(getContacts());
    dispatch({type: CREATE_CONTACTS_SUCCESS});
    Toast.show('Create Contact Success!');
  } catch (error) {
    dispatch({type: CREATE_CONTACTS_ERROR, error: error});
    Toast.show('Create Contact Error!');
  }
};

export const deleteContactAction = id => async dispatch => {
  try {
    dispatch({type: DELETE_CONTACTS_REQUEST});

    const res = await axios.delete(`${url}/${id}`);
    dispatch(getContacts());
    dispatch({type: DELETE_CONTACTS_SUCCESS});
    Toast.show('Delete Success!');
  } catch (error) {
    dispatch({type: DELETE_CONTACTS_ERROR, error: error});
    Toast.show('Delete Error!');
  }
};

export const updateContactAction = (id, value) => async dispatch => {
  try {
    dispatch({type: UPDATE_CONTACTS_REQUEST});

    const res = await axios.put(`${url}/${id}`, value);
    dispatch(getContactByid(id));
    dispatch(getContacts());
    Toast.show('Update Success!');
    dispatch({type: UPDATE_CONTACTS_SUCCESS});
  } catch (error) {
    Toast.show('Update Error!');
    dispatch({type: UPDATE_CONTACTS_ERROR, error: error});
  }
};
