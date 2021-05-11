import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import { cardStyles } from "../assets/Styles";

export default function CardList ({ item }) {
    return (
        <TouchableOpacity>
            <Text style={cardStyles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

}
