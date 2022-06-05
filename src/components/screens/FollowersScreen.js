import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollowers } from '../redux/actions';
import Follower from './Follower';

// const followers = [
//   {
//     id: 1,
//     name: 'Arnold',
//     num: 1242141525,
//   },
// ];

const FollowersScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const followers = useSelector(state => state.followers.fetchedFollowers);

  useEffect(() => {
    dispatch(fetchFollowers());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Followers</Text>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.input_text} placeholder="Search..." />
        <Image
          resizeMode="contain"
          style={styles.input_img}
          source={require('../../images/followers/filter.png')}
        />
      </View>
      <ScrollView>
        {followers.map(follower => (
          <Follower follower={follower} key={follower.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingLeft: 18,
  },
  header_text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    lineHeight: 40,
    color: '#2B2B2B',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 27,
    marginHorizontal: 17,
    paddingHorizontal: 23,
    paddingVertical: 9,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  input_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
  input_img: {
    paddingRight: 23,
  },
});
