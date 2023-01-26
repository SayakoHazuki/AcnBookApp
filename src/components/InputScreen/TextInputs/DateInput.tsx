import * as React from 'react';
import {View} from 'react-native';
import {enGB, registerTranslation} from 'react-native-paper-dates';
import {DatePickerInput} from 'react-native-paper-dates';
registerTranslation('en-GB', enGB);

export interface IDateInputProps {}

export function DateInput(_props: IDateInputProps) {
  return (
    <View>
      <DatePickerInput
        nativeID="datePicker"
        locale="en"
        label="Date"
        value={new Date()}
        onChange={(value: any) => console.log(value)}
        accessibilityLabelledBy="datePicker"
        accessibilityLanguage="en"
        inputMode={'end'}
      />
    </View>
  );
}
