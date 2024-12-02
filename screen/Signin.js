import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function Signin() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Nom:", nom, "Prénom:", prenom, "Email:", email, "Password:", password);
    };

    const handleForgotPassword = () => {
        console.log("Mot de passe oublié ?");
    };

    return (
        <Screen style={styles.container}>
            <Text style={{
                fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
                fontSize : 30,

                color : "#000",
                fontWeight : 'bold',
                marginTop: 50,
                marginBottom: 12
            }}>Inscris toi !</Text>
            <AppTextInput autoCapitalize="none" autoCorrect={false} icon="account" onChangeText={text => setNom(text)} placeholder="Nom" />
            <AppTextInput autoCapitalize="none" autoCorrect={false} icon="account" onChangeText={text => setPrenom(text)} placeholder="Prénom" />
            <AppTextInput autoCapitalize="none" autoCorrect={false} icon="email" keyboardType="email-address" onChangeText={text => setEmail(text)} placeholder="Email" textContentType="emailAddress" />
            <AppTextInput autoCapitalize="none" autoCorrect={false} icon="lock" onChangeText={text => setPassword(text)} placeholder="Password" secureTextEntry textContentType="password" />
            <AppButton title="S'inscrire" onPress={handleLogin} />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
    },
    forgotPassword: undefined
});

export default Signin;