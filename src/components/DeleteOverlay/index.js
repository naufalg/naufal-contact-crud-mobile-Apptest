import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Overlay, withTheme} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {
  deleteContactAction,
  getContacts,
} from '../../redux/actions/contacts.action';

function DeleteOverlay({firstName, lastName, id, theme}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button
        buttonStyle={{backgroundColor: theme.colors.error, marginTop: 20}}
        title="Delete"
        onPress={toggleOverlay}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>
          Delete {firstName} {lastName} ?
        </Text>
        <Button
          buttonStyle={{backgroundColor: theme.colors.error, marginTop: 20}}
          title="Yes"
          onPress={() => {
            dispatch(deleteContactAction(id));
            setVisible(false);
            dispatch(getContacts());
            navigation.navigate('Contacts');
          }}
        />
        <Button
          buttonStyle={{marginTop: 20}}
          title="No"
          onPress={toggleOverlay}
        />
      </Overlay>
    </View>
  );
}

export default withTheme(DeleteOverlay);
