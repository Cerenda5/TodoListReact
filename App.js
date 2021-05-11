import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, SafeAreaView, FlatList, ActivityIndicator} from "react-native";
import {styles} from "./assets/Styles";
import {Tile} from "react-native-elements";
import HeaderApp from "./components/header";
import CardList from "./components/cardList";
import Fire from './Fire';

export default function App() {
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

    return (
        <SafeAreaView style={{flex: 1}}>
            {/* Header */}
            <HeaderApp/>
                <FlatList
                    LisHeaderComponent={
                        <Tile
                        imageSrc={require('./assets/background_list.jpeg')}
                        title="3 todo list"
                        featured
                        imageContainerStyle={{width: 300, height: 150, borderRadius: 20}}
                        containerStyle={{alignItems: 'center', marginBottom: 10, height: 160}}
                        />
                    }
                    data={lists}
                />
        </SafeAreaView>

    )
}
   