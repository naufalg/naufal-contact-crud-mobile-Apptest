import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input, withTheme} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {
  getContactByid,
  getContacts,
  updateContactAction,
} from '../../../redux/actions/contacts.action';

function Form({data, id, SetEditState, editState, theme}) {
  const dispatch = useDispatch();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const photoRef = useRef();

  const [formState, SeFormState] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age.toString(),
    photo: data.photo,
  });

  const handleInput = (key, value) => {
    SeFormState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      updateContactAction(id, {
        ...formState,
        age: parseInt(formState.age),
        photo: formState.photo.length < 1 ? 'N/A' : formState.photo,
      }),
    );
    dispatch(getContactByid(id));
    dispatch(getContacts());
  };
  return (
    <View style={{marginTop: 15, paddingBottom: 20}}>
      <Input
        ref={firstNameRef}
        value={formState.firstName}
        onChangeText={e => {
          handleInput('firstName', e);
        }}
        returnKeyType="next"
        onSubmitEditing={() => {
          lastNameRef.current.focus();
        }}
        blurOnSubmit={false}
        label="First Name"
        placeholder="First Name"
      />
      <Input
        ref={lastNameRef}
        value={formState.lastName}
        onChangeText={e => {
          handleInput('lastName', e);
        }}
        returnKeyType="next"
        onSubmitEditing={() => {
          ageRef.current.focus();
        }}
        blurOnSubmit={false}
        label="Last Name"
        placeholder="Last Name"
      />
      <Input
        ref={ageRef}
        value={formState.age}
        onChangeText={e => {
          handleInput('age', e);
        }}
        returnKeyType="next"
        onSubmitEditing={() => {
          photoRef.current.focus();
        }}
        blurOnSubmit={false}
        label="Age"
        placeholder="Age"
      />
      <Input
        ref={photoRef}
        value={formState.photo}
        onChangeText={e => {
          handleInput('photo', e);
        }}
        onSubmitEditing={() => {
          SetEditState(!editState);
          handleSubmit();
        }}
        label="Photo URL"
        size={20}
        placeholder="Photo URL"
      />
      <Button
        buttonStyle={{backgroundColor: theme.colors.warning, marginTop: 15}}
        title="Cancel"
        onPress={() => {
          SetEditState(!editState);
        }}
      />
      <Button
        title="Update"
        buttonStyle={{backgroundColor: theme.colors.success, marginTop: 15}}
        onPress={() => {
          SetEditState(!editState);
          handleSubmit();
          // if(editState ===)
        }}
      />
    </View>
  );
}

export default withTheme(Form);
