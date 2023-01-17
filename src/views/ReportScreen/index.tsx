import * as React from 'react';
import {View} from 'react-native';

export interface IReportScreenProps {}

export interface IReportScreenState {}

export default class ReportScreen extends React.Component<
  IReportScreenProps,
  IReportScreenState
> {
  constructor(props: IReportScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <View></View>;
  }
}
