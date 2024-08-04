/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProductIcon from '../assets/svg/product.svg';
import OverviewIcon from '../assets/svg/overview.svg';
import OrdersIcon from '../assets/svg/orders.svg';
import ProfileIcon from '../assets/svg/fillprofile.svg';

// Screens
import ProductCategoriesScreen from '../Screens/ProductCategoriesScreen';
import SubCategoriesScreen from '../Screens/SubCategoriesScreen';
import SearchScreen from '../Screens/SearchScreen';
import SearchResultScreen from '../Screens/SearchResultScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import OverviewScreen from '../Screens/OverviewScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator initialRouteName="ProductCategories">
      <Stack.Screen
        name="Product Categories"
        component={ProductCategoriesScreen}
        options={{
          headerShown: false, // Hide header for Products tab
        }}
      />
      <Stack.Screen name="SubCategories" component={SubCategoriesScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SearchResult" component={SearchResultScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let IconComponent;

            if (route.name === 'Orders') {
              IconComponent = OrdersIcon;
            } else if (route.name === 'Products') {
              IconComponent = ProductIcon;
            } else if (route.name === 'Overview') {
              IconComponent = OverviewIcon;
            } else if (route.name === 'Profile') {
              IconComponent = ProfileIcon;
            }

            return <IconComponent width={size} height={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '600',
            paddingBottom: 5,
          },
        })}>
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen
          name="Products"
          component={ProductsStack}
          options={{
            headerShown: false, // Hide header for Products tab
          }}
        />
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
