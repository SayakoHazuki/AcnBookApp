import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ModeSelect} from '../../components/InputScreen/ModeSelect';
import {
  AmountInput,
  CategoryInput,
  DateInput,
} from '../../components/InputScreen/TextInputs/index';
export interface IInputScreenProps {}

export function InputScreen(_props: IInputScreenProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 15,
    },
  });
  return (
    <View style={styles.container}>
      <ModeSelect />
      <AmountInput />
      <CategoryInput />
      <DateInput />
    </View>
  );
}
