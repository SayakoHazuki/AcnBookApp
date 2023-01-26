import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../views/HomeScreen';
import ReportScreen from '../../views/ReportScreen';
import SettingsScreen from '../../views/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

export interface IMenuProps {}
export interface IMenuState {}

const tabBarIcons = {
  HomeScreen: ({color}: {color: any}) => (
    <MaterialCommunityIcons name="home" color={color} size={26} />
  ),
  ReportScreen: ({color}: {color: any}) => (
    <MaterialCommunityIcons name="bell" color={color} size={26} />
  ),
  SettingsScreen: ({color}: {color: any}) => (
    <MaterialCommunityIcons name="account" color={color} size={26} />
  ),
};

export default class Menu extends React.Component<IMenuProps, IMenuState> {
  constructor(props: IMenuProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: tabBarIcons.HomeScreen,
          }}
        />
        <Tab.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: tabBarIcons.ReportScreen,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: tabBarIcons.SettingsScreen,
          }}
        />
      </Tab.Navigator>
    );
  }
}
