import React from "react";
import {Header} from "react-native-elements";
import {View} from "react-native";
import AddButton from "./AddButton";

export default function HeaderApp(){
    return (
        <View>
            <Header
                leftComponent={{ icon: 'search', style: { color: '#fff' } }}
                centerComponent={{ text: 'MY TODOLIST', style: { color: 'red', fontSize: 20 } }}
                rightComponent={ <AddButton content={"Add"} />}
                containerStyle={{
                    backgroundColor: 'transparent',
                }}
            />
        </View>
    );
}