import * as React from 'react';
import {DataTable} from 'react-native-paper';
import store from '../../redux/store';
import {View, Pressable, Text, Animated, StyleSheet} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {useTheme} from '@react-navigation/native';
import {animatedVal1, fadeIn, fadeOut} from '../../utils/animation/fading';
import {accountsLoaded} from '../../redux/reducers/accountsSlice';
import {useAppSelector} from '../../helpers/hooks';
import {Colors, SAccounts} from '../../helpers/interfaces';
import loadAccounts from '../../utils/loaders/loadAccounts';

export interface IAccountsListProps {
  _theme: any;
}

export interface IAccountsListState {}

export default function AccountsList() {
  React.useEffect(() => {
    loadAccounts().then(accounts => {
      store.dispatch(accountsLoaded(accounts));
    });
  }, []);
  const _theme = useTheme();
  const theme = _theme as typeof _theme & {colors: Colors};
  const {selectedAccount} =
    useAppSelector<SAccounts>(state => state.accounts) ?? {};
  const account = selectedAccount
    ? store.getState().accounts?.accounts[selectedAccount]
    : null;

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 4,
      backgroundColor: theme.colors.primaryContainer,
      color: theme.colors.surface,
      shadowColor: theme.colors.shadow,
      shadowOffset: {width: 1, height: 1},
      elevation: 1,
      borderRadius: 12,
      borderStyle: 'solid',
      borderWidth: 0,
      height: 100,
    },
  });

  const skeletonLayout = [{key: '1', width: 300, height: 18, marginBottom: 6}];

  return (
    <View
      style={{
        padding: 25,
        height: 120,
      }}>
      <DataTable style={styles.container}>
        {/* <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row> */}
        <SkeletonContent
          isLoading={!store.getState().accounts.isLoaded}
          containerStyle={{
            flex: 1,
            width: 300,
          }}
          layout={skeletonLayout}>
          {/*//@ts-ignore*/}
          <DataTable.Row key={0}>
            <DataTable.Cell>
              <Text style={{fontSize: 16}}>
                {!store.getState().accounts.isLoaded
                  ? 'Unknown Account'
                  : account?.name}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={{fontSize: 16}}>
                {!store.getState().accounts.isLoaded ? 'N/A' : account?.balance}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
          {/* <DataTable.Row key={-1}>
          <DataTable.Cell>
            <Text style={{fontSize: 18}}>Total</Text>
          </DataTable.Cell>
          <DataTable.Cell numeric>
            <Text style={{fontSize: 18}}>
              {accounts?.reduce?.((acc, account) => {
                return acc + account.balance;
              }, 0) ?? 0}
            </Text>
          </DataTable.Cell>
        </DataTable.Row> */}

          {/* Button for adding a new account */}
          {/*//@ts-ignore*/}
          <DataTable.Row key={-2}>
            <DataTable.Cell>
              <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
                <Animated.View
                  style={
                    store.getState().accounts.isLoaded
                      ? {opacity: animatedVal1}
                      : {opacity: 1}
                  }>
                  <Text style={{color: theme.colors.primary}}>
                    {!store.getState().accounts.isLoaded
                      ? 'Accounts not loaded!'
                      : 'Add an account'}
                  </Text>
                </Animated.View>
              </Pressable>
            </DataTable.Cell>
          </DataTable.Row>
        </SkeletonContent>
      </DataTable>
    </View>
  );
}
