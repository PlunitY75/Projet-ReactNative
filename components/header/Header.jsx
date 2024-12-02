import * as React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';

const HeaderApp = () => {
    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/*<AntDesign name="home" size={24} color="black" style={styles.logo}/>*/}
                <Text style={styles.title}>POWER HOME</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8AE85',
        height: Constants.statusBarHeight + 50,
        width: '100%',
        paddingTop: Constants.statusBarHeight + 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        marginTop: 10, // Ajout de la marge en haut du logo
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default HeaderApp;
