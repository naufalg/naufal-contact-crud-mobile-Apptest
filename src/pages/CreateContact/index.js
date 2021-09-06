import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {Button, Card, Input} from 'react-native-elements';
import {
  createContactAction,
  getContacts,
} from '../../redux/actions/contacts.action';
import {useDispatch} from 'react-redux';

export default function CreateContact() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const photoRef = useRef();

  const [formState, SetFormState] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });

  const submitForm = () => {
    dispatch(
      createContactAction({
        ...formState,
        age: parseInt(formState.age),
        photo: formState.photo.length < 1 ? 'N/A' : formState.photo,
      }),
    );
  };

  const handleInput = (key, value) => {
    SetFormState({
      ...formState,
      [key]: value,
    });
  };

  return (
    <View>
      <Card style={{flex: 1}}>
        <Input
          value={formState.firstName}
          onChangeText={e => {
            handleInput('firstName', e);
          }}
          ref={firstNameRef}
          returnKeyType="next"
          onSubmitEditing={() => {
            lastNameRef.current.focus();
          }}
          blurOnSubmit={false}
          placeholder="First Name"
        />
        <Input
          value={formState.lastName}
          onChangeText={e => {
            handleInput('lastName', e);
          }}
          ref={lastNameRef}
          returnKeyType="next"
          onSubmitEditing={() => {
            ageRef.current.focus();
          }}
          blurOnSubmit={false}
          placeholder="Last Name"
        />
        <Input
          value={formState.age}
          onChangeText={e => {
            handleInput('age', e);
          }}
          ref={ageRef}
          returnKeyType="next"
          onSubmitEditing={() => {
            photoRef.current.focus();
          }}
          blurOnSubmit={false}
          placeholder="Age"
        />
        <Input
          value={formState.photo}
          onChangeText={e => {
            handleInput('photo', e);
          }}
          ref={photoRef}
          onSubmitEditing={() => {
            submitForm();
            dispatch(getContacts());
            navigation.navigate('Contacts');
          }}
          size={20}
          placeholder="Photo URL"
        />
        <Button
          title="Create"
          onPress={() => {
            submitForm();
            dispatch(getContacts());
            navigation.navigate('Contacts');
          }}
        />
      </Card>
    </View>
  );
}
