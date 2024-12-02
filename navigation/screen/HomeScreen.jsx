import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MonHabitat from "../../components/MonHavitat/contenu";
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    const [newItem, setNewItem] = React.useState('');

    const handleAddItem = () => {
        // Logique pour ajouter un nouvel élément
        console.log('Nouvel élément:', newItem);
        // Effacer le champ de saisie après l'ajout de l'élément
        setNewItem('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Mon Habitat</Text>
            <ScrollView style={styles.content}>
                <MonHabitat />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebecf0',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    addButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
    },
    content: {
        flex: 1,
        marginBottom: 10,
    },
    totalEnergie: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
