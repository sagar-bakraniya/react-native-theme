/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/authScreens/register';
import Home from './src/screens/oldhome';
import LinearGradient from 'react-native-linear-gradient';
import Landing from './src/screens/introduction/landing';
import Slider from './src/screens/introduction/slider';
import SignIn from './src/screens/authScreens/sign-in';
import VerifyOtp from './src/screens/authScreens/verify-otp';
 import Login from './src/screens/authScreens/login';
import ForgotPassword from './src/screens/authScreens/forgot-password';
import ResetPassword from './src/screens/authScreens/reset-password';
import Tabs from './src/screens/tabs'

const Stack = createStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName={'landing'}>
        <Stack.Screen name="landing" component={Landing}></Stack.Screen>
        <Stack.Screen name="signIn" component={SignIn}></Stack.Screen>
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name="resetPassword" component={ResetPassword}></Stack.Screen>
        <Stack.Screen name="verify-otp" component={VerifyOtp}></Stack.Screen>
        <Stack.Screen name="slider" component={Slider}></Stack.Screen>
        <Stack.Screen name="register" component={Register}></Stack.Screen>
        <Stack.Screen name="home" component={Home}></Stack.Screen>
        <Stack.Screen name="tabs" component={Tabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
