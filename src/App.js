import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Tabs } from './components/navigation/Tabs';
import { Onboarding } from './components/onboarding/Onboarding';
import { rootReducer } from './components/redux/rootReducer';

const Stack = createNativeStackNavigator();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer styles={styles.sectionContainer}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            component={Onboarding}
            name="Onboarding"
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={Tabs}
            name="Tabs"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
