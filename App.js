import React from 'react';
import HomeScreen from './views/HomeScreen';
import TodoScreen from "./views/TodoScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'MY TODOLIST APP' }}/>
                <Stack.Screen
                    name="Todo"
                    component={TodoScreen}
                    options={{ title: 'MY TODOLIST APP' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
