import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Follower = ({ follower }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.follower_image}
        source={{ uri: follower.avatar_url }}
      />
      <View style={styles.follower}>
        <Text style={styles.follower_name}>{follower.login}</Text>
        <Text style={styles.follower_num}>{follower.id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#eceef1',
  },
  follower: {},
  follower_image: {
    width: 58,
    height: 58,
    marginRight: 12,
    borderRadius: 100,
  },
  follower_name: {
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#2b2b2b',
  },
  follower_num: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 22,
    color: '#4f4f4f',
  },
});

export default Follower;
