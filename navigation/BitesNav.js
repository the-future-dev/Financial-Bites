import { createStackNavigator } from '@react-navigation/stack';

import { Feed } from '../screens/Feed';
import { Article } from '../screens/Bites/Article';

const Stack = createStackNavigator();

export function BitesNav() {
    return (
      <Stack.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false, gestureEnabled: true,}}>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    );
  }