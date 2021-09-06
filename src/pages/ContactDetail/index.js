import React from 'react';
import {View} from 'react-native';
import ContactDetailPage from '../../components/ContactDetailPage';

export default function ContactDetail({route}) {
  const {id} = route.params;

  return (
    <View style={{flex: 1}}>
      <ContactDetailPage id={id} />
    </View>
  );
}
