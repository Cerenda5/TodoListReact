import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal,TextInput } from 'react-native';
import { formStyles } from '../assets/Styles';

export default function TodoListForm() {
    const [name, setName] = useState('');
    
    function addList() {
        firebase.addList({
            name: name,
            todos: [],
        });
    }

    return (
        <View style={formStyles.container}>
            <Text style={formStyles.paragraph}>Add new Todo List</Text>
            <View style={formStyles.formContainer}>
            <TextInput style={formStyles.input} onChangeText={(value) => setName(value)} placeholder="List name" />
            <TouchableOpacity style= {formStyles.appButtonContainer} onPress={() => addList()}>
                <Text style={formStyles.appButtonText}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View> 
    )
}