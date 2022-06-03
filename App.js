import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './src/components/navigation/Tabs';
import { Onboarding } from './src/components/onboarding/Onboarding';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Onboarding />
    // </View>
    <NavigationContainer styles={styles.sectionContainer}>
      <Onboarding />
      {/* <Tabs /> */}
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
