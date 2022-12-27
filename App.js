import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import { setCustomText } from 'react-native-global-props';

import MyTabs from './navigation/Navigator';


export default function App() {
  const [fontsLoaded] = useFonts({
    Merriweather: require('./assets/Merriweather/Merriweather-Regular.ttf'),
    MerriweatherRegular: require('./assets/Merriweather/Merriweather-Regular.ttf'),
    MerriweatherBold: require('./assets/Merriweather/Merriweather-Bold.ttf'),
    MerriweatherLight: require('./assets/Merriweather/Merriweather-Light.ttf'),
    MerriweatherItalic: require('./assets/Merriweather/Merriweather-Italic.ttf'),
    MerriweatherBlackItalic: require('./assets/Merriweather/Merriweather-BlackItalic.ttf'),
  });
  if (!fontsLoaded) {
    return <></>;
  }
  const customTextProps = { 
    style: { 
      fontFamily: 'Merriweather',
    }
  }
  
  setCustomText(customTextProps);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}