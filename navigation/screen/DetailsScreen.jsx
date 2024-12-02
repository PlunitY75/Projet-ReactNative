import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import GoogleButton from "../../components/GoogleButton";

export default function DetailsScreen({ navigation }) {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const querySnapshot = await getDocs(collection(FIREBASE_DB, 'users'));
                const fetchedEmails = [];
                querySnapshot.forEach((doc) => {
                    fetchedEmails.push(doc.data().email);
                });
                setEmails(fetchedEmails);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };
        fetchEmails();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des Habitats</Text>
            <FlatList
                data={emails}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            <Button title={"Déconnexion"} onPress={() => FIREBASE_AUTH.signOut()} />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,

    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,

    },
    item: {
        padding: 10,
        fontSize: 38,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop: 10,
        marginBottom: 10,
    },
});
