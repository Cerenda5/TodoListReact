import React from 'react';
import { Text, View } from 'react-native';

export default function TodoScreen({route, navigation}) {
    const list = route.params

    return(
        <View>
            <Text>{list.item.name}</Text>
        </View>
    )
}