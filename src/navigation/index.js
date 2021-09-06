import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Home, ContactDetail, CreateContact} from '../pages';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{headerShown: false}}
//       backBehavior="none"
//       initialRouteName={'HOME'}
//       //   tabBar={props => <BottomNavigator {...props} />}
//     >
//       <Tab.Screen name="Contacts" component={Home} />
//       {/* <Tab.Screen name="Categories" component={Categories} />
//       <Tab.Screen name="Trolley" component={Trolley} />
//       <Tab.Screen name="Profile" component={Profile} /> */}
//       {/* <Tab.Screen name="Categories" component={Home} />
//       <Tab.Screen name="Trolley" component={Home} />
//       <Tab.Screen name="Profile" component={Home} /> */}
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  //   useSelector(state => state.userAuth);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} /> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}>
          <Stack.Screen name="Contacts" component={Home} />
          <Stack.Screen name="Contact Detail" component={ContactDetail} />
          <Stack.Screen name="Create Contact" component={CreateContact} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
