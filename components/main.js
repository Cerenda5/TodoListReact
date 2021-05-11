import React from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import { styles } from "../assets/Styles";
import AddButton from "./AddButton";

export default class Main extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>ToDo List !</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>

          </ScrollView>
          <View style={styles.footer}>
            <TextInput style={styles.textInput}
                       placeholder="Task"
                       placeholderTextColor="white"
                       underlineColorAndroid="transparent"></TextInput>
          </View>
      </View>
    );
  }
}


export default function App(){
    return (
        <SafeAreaView style={{ flex: 1}}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>ToDo List !</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <AddButton content={"Ajouter une liste"} />
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <TextInput style={styles.textInput}
                           placeholder="Task"
                           placeholderTextColor="white"></TextInput>
            </View>
        </SafeAreaView>

    )
}
