import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, Card, Text, Image} from 'react-native-elements';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getContactByid} from '../../redux/actions/contacts.action';
import DeleteOverlay from '../DeleteOverlay';
import Form from './Form';
import {DetailSkeleton} from '../CustomSkeleton';

export default function ContactDetailPage({id}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {contactById, isLoadingById} = useSelector(state => state.contacts);

  const [editState, SetEditState] = useState(false);

  useEffect(() => {
    dispatch(getContactByid(id));
  }, [id, dispatch]);

  return (
    <Card style={styles.card}>
      <ScrollView>
        {contactById !== null && !isLoadingById ? (
          <View>
            <Image style={{height: 300}} source={{uri: contactById.photo}} />
            {editState ? (
              <Form
                data={contactById}
                id={contactById.id}
                SetEditState={SetEditState}
                editState={editState}
              />
            ) : (
              <View>
                <View style={{marginTop: 10}}>
                  <Text h4>{contactById.firstName}</Text>
                  <Text h4>{contactById.lastName}</Text>
                  <View>
                    <Text style={styles.caption}>
                      Age: <Text h4>{contactById.age}</Text>
                    </Text>
                  </View>
                </View>
                <Button
                  buttonStyle={styles.buttons}
                  title="Edit"
                  onPress={() => {
                    SetEditState(!editState);
                  }}
                />
                <DeleteOverlay
                  style={styles.buttons}
                  firstName={contactById.firstName}
                  lastName={contactById.lastName}
                  id={id}
                />
              </View>
            )}
          </View>
        ) : (
          <DetailSkeleton />
        )}
      </ScrollView>
    </Card>
  );
}

const styles = {
  card: {borderRadius: 4, flex: 1},
  caption: {fontSize: 16},
  buttons: {marginTop: 20},
};
