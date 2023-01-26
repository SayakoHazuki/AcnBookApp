import * as React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export interface ICategoryInputProps {}

export function CategoryInput(_props: ICategoryInputProps) {
  return (
    <View>
      <TextInput
        nativeID="category"
        accessibilityLabelledBy={undefined}
        accessibilityLanguage="en"
        label="Category"
      />
    </View>
  );
}
