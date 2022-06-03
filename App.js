import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './src/components/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer styles={styles.sectionContainer}>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
