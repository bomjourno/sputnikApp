import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default Paginator = ({ data, currentPage }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {data.map((data, i) => {
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: 30,
                backgroundColor: currentPage == i ? '#fff' : '#404040',
              },
            ]}
            key={i.toString()}
          >
            <Text
              style={[
                styles.num,
                { color: currentPage == i ? '#404040' : '#fff' },
              ]}
            >
              {data.id}
            </Text>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 30,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  num: {
    top: 5,
    height: 30,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    lineHeight: 20,
  },
});
