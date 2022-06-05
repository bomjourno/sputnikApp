import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import slides from '../../utils/slides';
import { OnboardingItem } from './OnboardingItem';
import Logo from '../../images/onboarding/logo.svg';
import Paginator from './Paginator';
import LinearGradient from 'react-native-linear-gradient';

export const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('Tabs');
      console.log('Last Item');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <Logo style={styles.logo} />
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator currentPage={currentIndex} data={slides} />
      <TouchableOpacity onPress={scrollTo} style={styles.button}>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['#fe904b', '#fb724c']}
          style={styles.button_gradient}
        >
          <Text style={styles.button_text}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'flex-start',
    left: 40,
    top: 40,
  },
  button: {
    marginTop: 22,
    marginBottom: 54,
    color: '#fff',
  },
  button_gradient: {
    paddingTop: 16,
    paddingLeft: 146,
    paddingRight: 146,
    paddingBottom: 16,
    borderRadius: 10,
  },
  button_text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    lineHeight: 26,
    color: '#fcfcfc',
  },
});
