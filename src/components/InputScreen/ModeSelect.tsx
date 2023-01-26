import * as React from 'react';
import {View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';

export interface IModeSelectProps {}

export function ModeSelect(_props: IModeSelectProps) {
  return (
    <View>
      <SegmentedButtons
        accessibilityLabelledBy={undefined}
        accessibilityLanguage="en"
        buttons={[
          {label: 'Income', value: 'income'},
          {label: 'Expense', value: 'expense'},
        ]}
        value="income"
        onChange={(value: any) => console.log(value)}
      />
    </View>
  );
}
