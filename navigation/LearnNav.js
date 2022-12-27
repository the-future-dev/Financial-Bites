 
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Macro } from '../screens/MacroLearning';
import { SubArgs } from '../screens/Learn/SubArgs';
import { Inside } from "../screens/Learn/Inside";
import { Glossario } from "../screens/Learn/Glossario";
import { Word } from "../screens/Learn/component/Word";
import { SearchPage } from "../screens/Learn/component/SearchPage";

import { Article } from '../screens/Bites/Article';

const Stack = createStackNavigator();

//navigation={props.navigation} 

export function LearnNav(props) {
  return (
    <Stack.Navigator initialRouteName="Macro" screenOptions={{ headerShown: false, gestureEnabled: true,}}>
      <Stack.Screen name="Macro" component={Macro} />
      <Stack.Screen name="SubArgs" component={SubArgs} />
      <Stack.Screen name="Inside" component={Inside} />
      <Stack.Screen name="Glossario" component={Glossario} />
      <Stack.Screen name="Word" component={Word} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}

