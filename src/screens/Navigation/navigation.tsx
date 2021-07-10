import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ArchivedShoppingList from '../ArchivedShoppingList';
import ShoppingList from '../ShoppingList';
import ShoppingListDetails from '../ShoppingListDetails';

import Tab from '../../components/Tab';
import { ShoppingListDetailsProps } from '../ShoppingListDetails/interface';


type TabParamList = {
  ShoppingList: undefined;
  ArchivedShoppingList: undefined;
}

type StackParamList = {
  ShoppingList: undefined;
  ArchivedShoppingList: undefined;
  ShoppingListDetails: ShoppingListDetailsProps
}

const TabNavigator = createBottomTabNavigator<TabParamList>();
const StackNavigator = createStackNavigator<StackParamList>();

const ShoppingListStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="ShoppingList" component={ShoppingList} />
      <StackNavigator.Screen name="ShoppingListDetails" component={ShoppingListDetails} />
    </StackNavigator.Navigator>
  )
}

const ArchivedShoppingListStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="ArchivedShoppingList" component={ArchivedShoppingList} />
      <StackNavigator.Screen name="ShoppingListDetails" component={ShoppingListDetails} />
    </StackNavigator.Navigator>
  )
}

const Tabs = () => {
  return (
    <TabNavigator.Navigator tabBar={props => <Tab {...props} />}>
      <TabNavigator.Screen name="ShoppingList" component={ShoppingListStack} />
      <TabNavigator.Screen name="ArchivedShoppingList" component={ArchivedShoppingListStack} />
    </TabNavigator.Navigator>
  );
}

export default Tabs;