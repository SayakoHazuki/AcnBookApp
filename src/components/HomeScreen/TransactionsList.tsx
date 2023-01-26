import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export interface ITransactionsListProps {}

export function TransactionsList(props: ITransactionsListProps) {
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 30}}>Recent Transactions</Text>
    </View>
  );
}
