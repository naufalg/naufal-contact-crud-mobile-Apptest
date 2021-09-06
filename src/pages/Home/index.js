import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, RefreshControl, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ContactCard} from '../../components';
import {getContacts} from '../../redux/actions/contacts.action';
import {Card, FAB, Icon, withTheme} from 'react-native-elements';
import {HomeSkeleton} from '../../components/CustomSkeleton';

function Home({theme}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, isLoading} = useSelector(state => state.contacts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    dispatch(getContacts());
    setRefreshing(false);
  }, []);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      <Card style={{flex: 1}}>
        {!isLoading && data ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ContactCard
                firstName={item.firstName}
                lastName={item.lastName}
                photo={item.photo}
                id={item.id}
              />
            )}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        ) : (
          [...Array(2)].map((e, i) => <HomeSkeleton key={i} />)
        )}
      </Card>
      <FAB
        color={theme.colors.primary}
        size="small"
        style={{borderRadius: 50}}
        placement="right"
        title={<Icon name="create" color="#fff" />}
        upperCase={true}
        onPress={() => {
          navigation.navigate('Create Contact');
        }}
      />
    </View>
  );
}

export default withTheme(Home);
