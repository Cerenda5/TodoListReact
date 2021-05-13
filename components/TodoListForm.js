import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {addStyles} from '../assets/Styles';

export default function TodoListForm() {
    const [name, setName] = useState('');

    function addList() {
        firebase.addList({
            name: name,
            todos: [],
        });
    }

    return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                                  style={addStyles.writeTaskWrapper}>
                <TextInput style={addStyles.input} onChangeText={(value) => setName(value)} placeholder="Créer une nouvelle liste de tâches" />
                <TouchableOpacity onPress={() => addList()}>
                    <View style={addStyles.addWrapper}>
                        <Text style={addStyles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

    )

}

