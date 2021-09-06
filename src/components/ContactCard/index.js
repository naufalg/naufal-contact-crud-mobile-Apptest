import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';

export default function ContactCard({firstName, lastName, photo, id}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Contact Detail', {
          id: id,
        })
      }>
      <ListItem bottomDivider>
        <Avatar
          title={`${firstName[0]}${lastName[0]}`}
          rounded={true}
          size="medium"
          source={{uri: photo}}
        />
        <ListItem.Content>
          <ListItem.Title>{firstName}</ListItem.Title>
          <ListItem.Subtitle>{lastName}</ListItem.Subtitle>
          {/* <Button
            title="detail"
            onPress={() =>
              navigation.navigate('Contact Detail', {
                id: id,
              })
            }
          /> */}
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}
