import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import OrdersScreen from '../screens/OrdersScreen';
import DropoffScreen from '../screens/DropoffScreen';
import PickupScreen from '../screens/PickupScreen';
import ManifestScreen from '../screens/ManifestScreen';
// import ProfileScreen from '../screens/ProfileScreen';

/**
 * Sample stack navigator
 
const NewsStack = createStackNavigator({
  News: NewsScreen,
  Profile: ProfileScreen,
});

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  ),
};
*/
const OrderStack = createStackNavigator({
    Orders: OrdersScreen,
  });
  
  OrderStack.navigationOptions = {
    tabBarLabel: 'Orders',
    tabBarIcon: ({focused}) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
      />
    ),
  };
const DropoffStack = createStackNavigator({
  Dropoff: DropoffScreen,
});

DropoffStack.navigationOptions = {
  tabBarLabel: 'Drop Off',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'}
    />
  ),
};

const PickupStack = createStackNavigator({
    Pickup: PickupScreen,
  });
  
  PickupStack.navigationOptions = {
    tabBarLabel: 'Pick Up',
    tabBarIcon: ({focused}) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-open' : 'md-open'}
      />
    ),
  };
  const ManifestStack = createStackNavigator({
    Manifest: ManifestScreen,
  });
  
  ManifestStack.navigationOptions = {
    tabBarLabel: 'Manifest',
    tabBarIcon: ({focused}) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-checkmark-circle' : 'md-checkmark-circle'}
      />
    ),
  };
const TabNavigator = createBottomTabNavigator({
  OrderStack,
  DropoffStack,
  PickupStack,
  ManifestStack,
});
export default createAppContainer(TabNavigator);
