import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FollowersScreen from '../screens/FollowersScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { View } from 'react-native';

import HomeIcon from '../../images/navigate/Home.svg';
import FollowersIcon from '../../images/navigate/Followers.svg';
import ChatIcon from '../../images/navigate/Send.svg';
import ProfileIcon from '../../images/navigate/Profile.svg';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 86,
          paddingBottom: 0,
          backgroundColor: '#FCFCFC',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HomeIcon
                width={19}
                height={20}
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                }}
              />
              <Text
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                  fontSize: 10,
                  lineHeight: 15,
                  top: 2,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Followers"
        component={FollowersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FollowersIcon
                width={19}
                height={20}
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                }}
              />
              <Text
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                  fontSize: 10,
                  lineHeight: 15,
                  top: 2,
                }}
              >
                Followers
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          // tabBarBadge: '',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChatIcon
                width={20}
                height={20}
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                }}
              />
              <Text
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                  fontSize: 10,
                  lineHeight: 15,
                  top: 2,
                }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ProfileIcon
                width={16}
                height={20}
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                }}
              />
              <Text
                style={{
                  color: focused ? '#130F26' : '#AEAEB2',
                  fontSize: 10,
                  lineHeight: 15,
                  top: 2,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
