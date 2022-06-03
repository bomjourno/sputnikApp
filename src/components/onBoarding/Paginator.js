import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: 'row', height: 64 }}>
      {data.map((data, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: 30,
                opacity,
              },
            ]}
            key={i.toString()}
          >
            <Text style={styles.num}>{data.id}</Text>
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
    backgroundColor: '#404040',
    marginHorizontal: 10,
  },
  num: {
    top: 5,
    height: 30,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    lineHeight: 20,
    color: '#fff',
  },
});
