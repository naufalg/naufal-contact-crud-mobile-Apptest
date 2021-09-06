import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation';
import {store} from './src/redux/store';

const Main = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
