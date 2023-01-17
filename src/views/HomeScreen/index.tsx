import * as React from 'react';
import {Text, View} from 'react-native';
import AccountsList from '../../components/AccountsList';
import {TransactionsList} from '../../components/TransactionsList';

export interface IHomeScreenProps {}

export interface IHomeScreenState {}

export default class HomeScreen extends React.Component<
  IHomeScreenProps,
  IHomeScreenState
> {
  constructor(props: IHomeScreenProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <AccountsList />
        <TransactionsList />
      </View>
    );
  }
}
