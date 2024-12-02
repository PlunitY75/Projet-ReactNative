import React from 'react';
import { View, Text, Switch, Button, Alert, StyleSheet } from 'react-native';
import {FIREBASE_AUTH} from "../../FirebaseConfig";



export default function PreferenceScreen() {


    const showAlert = () => {
        Alert.alert(
            'À propos',
            'Prénom: Eric - Yassin - Youssef\nAutres infos: Projet Mobile 2024 - Groupe 203',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>

            <View style={styles.aboutButtonContainer}>
                <Button title="À propos" onPress={showAlert} />
            </View>
            <Button title={"Déconnexion"} onPress={() => FIREBASE_AUTH.signOut()} style={styles.deconnexion}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    text: {
        marginBottom: 20,
    },
    aboutButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    deconnexion: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
    }
});
