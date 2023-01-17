import * as React from 'react';
import {View} from 'react-native';

export interface ISettingsScreenProps {}

export interface ISettingsScreenState {}

export default class SettingsScreen extends React.Component<
  ISettingsScreenProps,
  ISettingsScreenState
> {
  constructor(props: ISettingsScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <View></View>;
  }
}
