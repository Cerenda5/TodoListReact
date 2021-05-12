import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../views/HomeScreen"

const Stack = createStackNavigator()

export const HomeRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="HomeRoutes">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}