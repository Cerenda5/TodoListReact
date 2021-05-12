import React, {useEffect} from 'react';
import { Image, View } from 'react-native'
import {styles, splashStyles} from "../assets/Styles"

export default function SplashScreen({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 2000);
    }, [])

    return (
        <View style={splashStyles.container}>
            <Image
                source={require('../assets/logo.png')}
            />
        </View>
    )
}