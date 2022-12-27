import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { Login } from '../screens/Profile/Auth/Login';
import { Otp } from '../screens/Profile/TellAuth/Otp'

import { Signup } from '../screens/Profile/Auth/Signup';
import { Home } from "../screens/Profile.js";
import { AboutUs } from '../screens/Profile/Auth/AboutUs';
import { Feedback } from "../screens/Profile/Auth/Feedback";

const Stack = createStackNavigator();

export function AuthNav() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Otp} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="AboutUs" component={AboutUs} />

      </Stack.Navigator>
  );
}