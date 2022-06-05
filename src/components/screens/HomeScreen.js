import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { underline } from 'jest-matcher-utils/node_modules/chalk';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollowers, fetchRepos } from '../redux/actions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const followers = useSelector(state => state.followers.fetchedFollowers);
  const repos = useSelector(state => state.repos.repos);

  useEffect(() => {
    dispatch(fetchFollowers());
    dispatch(fetchRepos());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Crictian</Text>
        <TouchableOpacity style={styles.header_button}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={['#fe904b', '#fb724c']}
            style={styles.header_gradient}
          >
            <Image source={require('../../images/home/plusIcon.png')} />
            <Text style={styles.header_buttonText}>Follow on github</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.links}>
        <Text style={styles.links_text}>Company - @hSchool</Text>
        <Text style={styles.links_text}>Email - mikevocalz@gmail.com</Text>
        <Text style={styles.links_text}>
          Bio - Front-End Dev w/ a touch of UI/UX
        </Text>
        <View style={styles.links_borderBottom}></View>
      </View>
      <View style={styles.items}>
        <View style={styles.items_header}>
          <Text style={styles.items_headerText}>Following you</Text>
          <Text
            style={styles.items_headerLink}
            onPress={() => navigation.navigate('Followers')}
          >
            View all
          </Text>
        </View>
        <ScrollView style={styles.items_list} horizontal>
          {followers.map(follower => (
            <View key={follower.id} style={styles.item}>
              <Image
                resizeMode="contain"
                style={styles.item_image}
                source={{ uri: follower.avatar_url }}
              />
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.item_name}
              >
                {follower.login}
              </Text>
              <Text style={styles.item_num}>{follower.id}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.items_borderBottom}></View>
      </View>
      <View style={styles.items}>
        <View style={styles.items_header}>
          <Text style={styles.items_headerText}>Repositories</Text>
          <Text style={styles.items_headerLink}>View all</Text>
        </View>
        <ScrollView style={styles.items_list_repos} horizontal>
          {repos.map(repo => (
            <View key={repo.id} style={styles.item_repos}>
              <View style={styles.item_column}>
                <Image
                  resizeMode="contain"
                  style={styles.item_image_repos}
                  source={{ uri: repo.owner.avatar_url }}
                />
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={styles.item_name_repos}
                >
                  {repo.name}
                </Text>
                <Text style={styles.item_num}>{repo.id}</Text>
              </View>
              <View style={styles.item_column}>
                <View style={styles.item_column_stark}>
                  <ImageBackground
                    style={styles.item_column_image}
                    source={require('../../images/repos/star.png')}
                  />
                  <Text style={styles.item_column_text}>
                    {repo.stargazers_count}
                  </Text>
                </View>
                <View style={styles.item_column_fork}>
                  <ImageBackground
                    style={styles.item_column_image_fork}
                    source={require('../../images/repos/fork.png')}
                  />
                  <Text style={styles.item_column_text_fork}>{repo.forks}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header_text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    lineHeight: 51,
    color: '#2B2B2B',
  },
  header_button: {
    alignSelf: 'flex-end',
  },
  header_gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 13.5,
    paddingLeft: 5.3,
    paddingRight: 5.3,
    paddingBottom: 13.5,
    borderRadius: 10,
  },
  // header_plus: {
  //   width: 8,
  //   height: 8,
  // },
  header_buttonText: {
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    lineHeight: 15,
    color: '#fff',
  },
  links: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  links_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 26,
    color: '#B0B0B0',
  },
  links_borderBottom: {
    marginTop: 17,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E8E8E8',
  },
  items: {
    marginTop: 10.5,
  },
  items_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 21,
  },
  items_headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    lineHeight: 51,
    color: '#2B2B2B',
  },
  items_headerLink: {
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    lineHeight: 22,
    textDecorationLine: underline,
  },

  items_list: {
    marginTop: 18.5,
    paddingLeft: 16,
  },
  items_list_repos: {
    marginTop: 25,
    paddingLeft: 31,
  },
  items_borderBottom: {
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E8E8E8',
  },
  item: {
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  item_image: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  item_column: {
    justifyContent: 'space-between',
    marginRight: 8,
  },
  item_column_stark: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 12.8,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(229, 229, 234, .3)',
    borderRadius: 7,
  },
  item_column_fork: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 7.5,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#2b2b2b',
    borderRadius: 7,
  },
  item_column_image: {
    width: 8.3,
    height: 7.9,
    marginRight: 3,
  },
  item_column_image_fork: {
    width: 14,
    height: 14,
    marginRight: 10.5,
  },
  item_column_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    lineHeight: 15,
    color: '#ffcb55',
  },
  item_column_text_fork: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    lineHeight: 15,
    color: '#fcfcfc',
  },
  item_repos: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 24,
  },
  item_name: {
    marginTop: 6,
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 26,
    color: '#2B2B2B',
  },
  item_num: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    lineHeight: 15,
    color: '#A1A1A1',
  },
  item_name_repos: {
    marginTop: 20,
    maxWidth: 100,
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 26,
    color: '#2B2B2B',
  },
  item_image_repos: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
