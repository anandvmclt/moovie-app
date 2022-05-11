import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen";
import MoovieScreen from "./src/components/MovieScreen";

const Stack = createStackNavigator()

export default () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="movie" component={MoovieScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

