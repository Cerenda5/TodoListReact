import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity} from "react-native";
import {cardStyles, styles} from "../assets/Styles";
import {Tile} from "react-native-elements";
import HeaderApp from "../components/header";
import CardList from "../components/cardList";
import Fire from '../Fire';

export default function HomeScreen() {
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
                <FlatList
                    ListHeaderComponent={
                        <Tile
                            imageSrc={require('../assets/background_list.jpeg')}
                            title="2 listes "
                            featured
                            imageContainerStyle={{width: 300, height: 120, borderRadius: 20, marginTop: 20}}
                            containerStyle={{alignItems: 'center', marginBottom: 10, height: 160}}
                        />
                    }
                    data={lists}
                    renderItem={(list ) => (
                        <TouchableOpacity>
                            <Text>{list.item.name}</Text>
                        </TouchableOpacity>
                    )

                    }
                />
            </SafeAreaView>

        )
    }
}
