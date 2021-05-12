import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import {cardStyles} from "../assets/Styles";

export default function CardList(list) {
    return (
        <TouchableOpacity>
            <Text style={cardStyles.item}>{list.item.item.name}</Text>
        </TouchableOpacity>
    )

}
