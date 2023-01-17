import {Animated} from 'react-native';

export const animatedVal1 = new Animated.Value(1);
export const fadeIn = () => {
  Animated.timing(animatedVal1, {
    toValue: 0.1,
    duration: 100,
    useNativeDriver: true,
  }).start();
};
export const fadeOut = () => {
  Animated.timing(animatedVal1, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }).start();
};

