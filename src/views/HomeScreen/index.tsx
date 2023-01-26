import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import AccountsList from '../../components/HomeScreen/AccountsList';
import {AddRecordButton} from '../../components/HomeScreen/AddRecordButton';
import {TransactionsList} from '../../components/HomeScreen/TransactionsList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InputScreen} from '../InputScreen';

const Stack = createNativeStackNavigator();

export interface IHomeScreenProps {}

export interface IHomeScreenState {}

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Input"
        component={InputScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const InitialScreen = ({navigation}: {navigation: any}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  });
  return (
    <View style={styles.container}>
      <AccountsList />
      <TransactionsList />
      <AddRecordButton navigation={navigation} />
    </View>
  );
};
