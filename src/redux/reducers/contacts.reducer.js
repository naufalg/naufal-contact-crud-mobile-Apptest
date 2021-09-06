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

const initialState = {
  isLoading: false,
  isLoadingById: false,
  isLoadingCreate: false,
  isLoadingUpdate: false,
  isLoadingDelete: false,
  data: [],
  contactById: null,
  contactsError: null,
  byIdError: null,
  createError: null,
  updateError: null,
  deleteError: null,
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_CONTACTS_ERROR:
      return {
        ...state,
        isLoadingById: false,
        contactsError: action.error,
      };
    case GET_CONTACTS_BY_ID_REQUEST:
      return {
        ...state,
        isLoadingById: true,
      };
    case GET_CONTACTS_BY_ID_SUCCESS:
      return {
        ...state,
        isLoadingById: false,
        contactById: action.payload,
      };
    case GET_CONTACTS_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        byIdError: action.error,
      };
    case CREATE_CONTACTS_REQUEST:
      return {
        ...state,
        isLoadingCreate: true,
      };
    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoadingCreate: false,
      };
    case CREATE_CONTACTS_ERROR:
      return {
        ...state,
        isLoadingCreate: false,
        createError: action.error,
      };
    case DELETE_CONTACTS_REQUEST:
      return {
        ...state,
        isLoadingDelete: true,
      };
    case DELETE_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoadingDelete: false,
      };
    case DELETE_CONTACTS_ERROR:
      return {
        ...state,
        isLoadingDelete: false,
        createError: action.error,
      };
    case UPDATE_CONTACTS_REQUEST:
      return {
        ...state,
        isLoadingUpdate: true,
      };
    case UPDATE_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoadingUpdate: false,
      };
    case UPDATE_CONTACTS_ERROR:
      return {
        ...state,
        isLoadingUpdate: false,
        createError: action.error,
      };
    default:
      return state;
  }
}
