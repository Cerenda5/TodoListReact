import React from 'react';
import HomeScreen from './views/HomeScreen';
import TodoScreen from "./views/TodoScreen";
import SplashScreen from "./views/SplashScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SplashScreen}>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{headerShown: false}}/>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{headerShown: false}}/>
                <Stack.Screen name="TodoScreen" component={TodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
