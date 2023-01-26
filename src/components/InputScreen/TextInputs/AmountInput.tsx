import * as React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export interface IAmountInputProps {}

export function AmountInput(_props: IAmountInputProps) {
  return (
    <View>
      <TextInput
        keyboardType="numeric"
        accessibilityLabelledBy={undefined}
        accessibilityLanguage="en"
        label="Amount"
      />
    </View>
  );
}
