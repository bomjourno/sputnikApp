import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/actions';

const SignIn = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  function handleSearchUser() {
    dispatch(fetchUser(value));
    setIsFirstLaunch(false);
  }

  useEffect(() => {
    if (user.id) {
      navigation.navigate('Tabs');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding')}
          style={styles.header_arrow}
        >
          <ImageBackground
            style={styles.header_image}
            resizeMode="contain"
            source={require('../../images/signin/arrow.png')}
          />
        </TouchableOpacity>
        <View style={styles.header_text}>
          <Text style={styles.header_title}>GitHub social</Text>
          <Text style={styles.header_subtitle}>Enter nickname on github</Text>
        </View>
      </View>
      <View
        style={[
          styles.input,
          { marginBottom: user.id || isFirstLaunch ? 242 : 40 },
        ]}
      >
        <Text style={styles.input_label}>Nickname</Text>
        <TextInput
          autoCapitalize="none"
          onChangeText={setValue}
          value={value}
          style={styles.input_text}
          placeholder="Enter nickname"
        />
      </View>
      <View
        style={[
          styles.alert,
          { display: user.id || isFirstLaunch ? 'none' : 'flex' },
        ]}
      >
        <Image
          style={styles.alert_image}
          resizeMode="contain"
          source={require('../../images/signin/alert.png')}
        />
        <Text style={styles.alert_text}>
          User with this nickname not found!
        </Text>
      </View>
      <View pointerEvents={value ? 'auto' : 'none'} style={styles.search}>
        <TouchableOpacity onPress={handleSearchUser} style={styles.button}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={value ? ['#fe904b', '#fb724c'] : ['#e2e2e2', '#e2e2e2']}
            style={styles.button_gradient}
          >
            <Text style={styles.button_title}>Search</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.button_subtitle}>
          <Text style={styles.button_span}>By signing in, I agree with </Text>
          Terms of Use and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    marginTop: 45,
    paddingLeft: 16,
  },
  header_arrow: {
    marginBottom: 22,
    width: 20,
    height: 20,
  },
  header_image: {
    width: 20,
    height: 20,
  },
  header_text: {
    marginBottom: 46,
  },
  header_title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    lineHeight: 51,
    color: '#2b2b2b',
  },
  header_subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 26,
    color: '#7a7a7a',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#f0f0f0',
    color: '#000',
    borderRadius: 14,
  },
  input_text: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    paddingLeft: 15,
    fontFamily: 'Poppins-Medium',
    fontSize: 36,
    lineHeight: 54,
    color: '#000',
  },
  input_label: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingLeft: 15,
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    lineHeight: 24,
    color: '#aeaeb2',
  },
  alert: {
    alignItems: 'center',
    marginBottom: 52,
  },
  alert_image: {
    marginBottom: 17,
  },
  alert_text: {
    maxWidth: 290,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    lineHeight: 36,
    color: '#e73a40',
  },
  search: {
    paddingHorizontal: 16,
  },
  button: {},
  button_gradient: {
    paddingVertical: 16,
    borderRadius: 14,
  },
  button_title: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    lineHeight: 26,
    color: '#f6f7fa',
  },
  button_subtitle: {
    maxWidth: 330,
    marginTop: 25,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 26,
    color: '#2b2b2b',
  },
  button_span: {
    color: '#b0b0b0',
  },
});
