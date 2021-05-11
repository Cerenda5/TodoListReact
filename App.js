import React, {useState} from 'react';
import {ScrollView, View, Text, SafeAreaView, FlatList} from "react-native";
import {styles} from "./assets/Styles";
import {Tile} from "react-native-elements";
import HeaderApp from "./components/header";
import CardList from "./components/cardList";

export default function App() {
    const [todo, setTodo] = useState([
        { text: 'Mémoire', key: '1' },
        { text: 'Projet', key: '2' },
        { text: 'Trucs cool', key: '3' }
    ]);

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
                        data={todo}
                        renderItem={({ item }) => (
                            <CardList item={item} />
                        )}
                />
        </SafeAreaView>

    )

    // return (
    //     <SafeAreaView style={{flex: 1}}>
    //         {/* Header */}
    //         <HeaderApp/>
    //         <ScrollView style={styles.scrollContainer}>
    //             <Tile
    //                 imageSrc={require('./assets/background_list.jpeg')}
    //                 title="3 todo list"
    //                 featured
    //                 imageContainerStyle={{width: 300, height: 150, borderRadius: 20}}
    //                 containerStyle={{alignItems: 'center', marginBottom: 10, height: 160}}
    //             >
    //             </Tile>
    //             <View>
    //                 <FlatList
    //                     data={todo}
    //                     renderItem={({ item }) => (
    //                         <CardList item={item} />
    //                     )}
    //                 />
    //             </View>
    //         </ScrollView>
    //     </SafeAreaView>

    // )
}
