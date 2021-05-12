import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity} from "react-native";
import {cardStyles, styles} from "../assets/Styles";
import {Tile} from "react-native-elements";

import CardList from "../components/cardList";

import Fire from '../Fire';
import TodoListForm from '../components/TodoListForm';

export default function HomeScreen({navigation}) {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase = new Fire((error) => {
            if(error) {
                return alert("Une erreur est survenue");
            }
            firebase.getLists(lists => {
                setLists(lists);
                setLoading(false);
            });
            return function unsubscribe() {
                firebase.detach();
            };
        });

    }, []);

    if(loading) {
        return(
            <View>
                <ActivityIndicator></ActivityIndicator>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={{flex: 1}}>
                 <TodoListForm></TodoListForm>
                <FlatList
                    data={lists}
                    renderItem={(list ) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TodoScreen', list)}>
                            <Text style={cardStyles.item}>{list.item.name}</Text>
                        </TouchableOpacity>
                    )
                    }
                />
            </SafeAreaView>

        )
    }
}
