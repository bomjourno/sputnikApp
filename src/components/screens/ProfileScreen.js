import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ProfileScreen = () => {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.settings}>
          <ImageBackground
            style={styles.settings_image}
            resizeMode="contain"
            source={require('../../images/profile/settings.png')}
          />
          <View />
        </View>
        <View style={styles.notifications}>
          <ImageBackground
            style={styles.notifications_image}
            style={styles.settings_image}
            resizeMode="contain"
            source={require('../../images/profile/notification.png')}
          />
        </View>
      </View>
      <View style={styles.user}>
        <Image
          style={styles.user_avatar}
          resizeMode="contain"
          source={{ uri: user.avatar_url }}
        />
        <Text style={styles.user_name} ellipsizeMode="tail" numberOfLines={1}>
          {user.login}
        </Text>
        <Text style={styles.user_id}>{user.id}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            resizeMode="contain"
            style={styles.button_image}
            source={require('../../images/profile/heart.png')}
          />
          <Text style={styles.button_text}>My following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            style={styles.button_image}
            resizeMode="contain"
            source={require('../../images/profile/heart.png')}
          />
          <Text style={styles.button_text}>My badges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            style={styles.button_image}
            resizeMode="contain"
            source={require('../../images/profile/medal.png')}
          />
          <Text style={styles.button_text}>My organizatios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            style={styles.button_image}
            resizeMode="contain"
            source={require('../../images/profile/dollar.png')}
          />
          <Text style={styles.button_text}>My following</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButton_text}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  settings: {
    paddingHorizontal: 14,
    paddingVertical: 13.7,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
  },
  settings_image: {
    width: 15.8,
    height: 16.7,
  },
  notifications: {
    paddingHorizontal: 14.9,
    paddingVertical: 13.7,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
  },
  notifications_image: {
    width: 14.2,
    height: 13.3,
  },
  user: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_avatar: {
    width: 165,
    height: 165,
    borderRadius: 100,
  },
  user_name: {
    maxWidth: 282,
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    lineHeight: 51,
    color: '#2b2b2b',
  },
  user_id: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 22,
    color: '#a1a1a2',
  },
  mainButton: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingVertical: 16,
    marginTop: 3,
    marginHorizontal: 16,
    backgroundColor: '#404040',
    borderRadius: 14,
  },
  mainButton_text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    lineHeight: 26,
    color: '#f7f7f8',
  },
  buttons: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginBottom: 18,
    paddingVertical: 19,
    backgroundColor: '#fafafa',
    borderRadius: 14,
  },
  button_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    lineHeight: 20,
    color: '#2b2b2b',
  },
  button_image: {
    width: 20,
    height: 20,
    marginLeft: 30,
    marginRight: 10,
  },
});
