import React from 'react';
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity, CheckBox} from 'react-native';
import {styles, swipeStyles} from "../assets/Styles";
import {SwipeListView} from "react-native-swipe-list-view";

export default function TodoScreen({route, navigation}) {
    const list = route.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                {/* Titre de la page */}
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>{list.item.name}</Text>
                    {/* Ici nos listes de tâches */}
                    <SwipeListView
                        data={list}
                        renderItem={(list) => (
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => navigation.navigate('TodoScreen', list)}>
                                <View style={styles.item}>
                                    <View style={styles.itemLeft}>
                                        <View style={styles.square}></View>
                                        <Text>Test</Text>
                                    </View>
                                    <View>
                                        <CheckBox

                                        />
                                    </View>
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
                                    onPress={() => {
                                        alert('Mettre en place le delete')
                                    }}>
                                    <Text style={swipeStyles.backRightBtnRight}>Supprimer</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
