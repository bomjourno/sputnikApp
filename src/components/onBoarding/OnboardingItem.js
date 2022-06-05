import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';

export const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: 'contain' }]}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // flex: 0.6,
    justifyContent: 'center',
  },
  title: {
    maxWidth: 332,
    marginTop: 22,
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
  },
});
