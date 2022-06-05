import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Tabs } from './src/components/navigation/Tabs';
import { Onboarding } from './src/components/onboarding/Onboarding';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
