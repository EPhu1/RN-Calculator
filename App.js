//How to set up the project directory: https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707016#questions
//1.) npx expo-cli init <projectName>
//2.) 
import 'react-native-gesture-handler'; //2.) https://reactnavigation.org/docs/getting-started/ (3 cmd prompt installs)
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //3.) https://reactnavigation.org/docs/hello-react-navigation/ (1 cmd prompt install)

import CalculatorScreen from './src/screens/CalculatorScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Home" component = {HomeScreen} />
        <Stack.Screen name="Calculator" component = {CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;