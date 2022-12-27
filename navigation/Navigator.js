import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EtypoIcons from 'react-native-vector-icons/Entypo';

import { dim, colors, fonts } from '../style/styles';

import { AuthNav } from './AuthNav';
import { LearnNav } from './LearnNav';
import { BitesNav } from './BitesNav';

const Tab = createBottomTabNavigator();

      //navigation={props.navigation} 

export default function MyTabs(props) {
  return (
    <Tab.Navigator
      initialRouteName="BitesNav"
      screenOptions={{
        tabBarActiveTintColor: colors.dark,
        tabBarActiveBackgroundColor: colors.light,
        tabBarInactiveTintColor: colors.light,
        tabBarInactiveBackgroundColor: colors.dark,

        labelStyle: {fontSize: 35*dim.fontScale},
        headerTitleStyle: {
          fontFamily: "Merriweather",
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'papayawhip',
        },
        headerTintColor: colors.dark,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Bites" component={BitesNav} options={{
            tabBarLabel: '', tabBarIcon: ({ color, size}) => (
                 <MaterialCommunityIcons name="newspaper" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Learning"
        component={LearnNav}
        options={{
          tabBarIcon: ({ color, size}) => (
            <EtypoIcons name="graduation-cap" width='100%' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Informations"
        component={AuthNav}
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="account" width='100%' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

