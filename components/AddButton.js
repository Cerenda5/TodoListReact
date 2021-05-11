import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function AddButton(){
return (
        <Button
            icon={
                <Icon
                    name="add"
                    size={15}
                    color="black"
                />
            }
            buttonStyle ={{
                backgroundColor: 'transparent',
            }}
            onPress={() => {
                alert('TODO: Mettre l ajout')
            }}
        />
);
}