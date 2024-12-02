import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function GoogleButton({ style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={styles.containerText}> Se connecter avec Google</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"dodgerblue",
        width:"90%",
        padding:13,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10
    },
    containerText:{
        fontSize:14,
        fontWeight:"bold",
        color:"white"
    },
})


