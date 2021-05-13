import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    ScrollView, CheckBox
} from "react-native";
import {styles, swipeStyles} from "../assets/Styles";
import Fire from '../Fire';
import TodoListForm from '../components/TodoListForm';
import {SwipeListView} from "react-native-swipe-list-view";

export default function HomeScreen({navigation}) {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);

    function deleteList() {
        firebase.deleteList({
            id: id,
            todos: [],
        });
    }

    useEffect(() => {
        firebase = new Fire((error) => {
            if (error) {
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

    if (loading) {
        return (
            <View>
                <ActivityIndicator></ActivityIndicator>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    keyboardShouldPersistTaps='handled'
                >
                    {/* Logo */}
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/logo-removebg.png')}
                        />
                    </View>

                    {/* Titre de la page */}
                    <View style={styles.tasksWrapper}>
                        <Text style={styles.sectionTitle}>Listes de tâches (mettre le nombre)</Text>

                        {/* Ici nos listes de tâches */}
                        <SwipeListView
                            data={lists}
                            renderItem={(list) => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => navigation.navigate('TodoScreen', list)}>
                                    <View style={styles.item}>
                                        <View style={styles.itemLeft}>
                                            <View style={styles.square}></View>
                                            <Text>{list.item.name}</Text>
                                        </View>
                                        <View style={styles.arrow}></View>
                                    </View>
                                </TouchableOpacity>
                            )}
                            renderHiddenItem={() => (
                                <View style={swipeStyles.rowBack}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {
                                            alert('Mettre en place l update')
                                        }}>
                                        <Text style={swipeStyles.backRightBtn}>Modifier</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={deleteList}>
                                        <Text style={swipeStyles.backRightBtnRight}>Supprimer</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            leftOpenValue={75}
                            rightOpenValue={-75}
                        />

                    </View>
                </ScrollView>
                <TodoListForm/>

            </SafeAreaView>
        )
    }
}

