import {NavigationProp, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Animated, Text} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {Colors} from '../../helpers/interfaces';
// import {animatedVal1, fadeIn, fadeOut} from '../../utils/animation/fading';

export interface IAddRecordButtonProps {
  navigation: NavigationProp<any>;
}

export function AddRecordButton(props: IAddRecordButtonProps) {
  const _theme = useTheme();
  const theme = _theme as typeof _theme & {colors: Colors};
  const styles = StyleSheet.create({
    floatingButton: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 25,
      right: 25,
      shadowColor: theme.colors.shadow,
      shadowOffset: {width: 1, height: 1},
      elevation: 1,
    },
  });

  const {navigation} = props;

  return (
    <Button
      icon="plus"
      style={styles.floatingButton}
      mode="contained"
      onPress={() => {
        navigation.navigate('HomeScreen', {screen: 'Input'});
      }}
      {...props}>
      Add a record
    </Button>
  );
}
