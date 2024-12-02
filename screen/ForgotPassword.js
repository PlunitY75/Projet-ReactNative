// ForgotPassword.js
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleResetPassword = () => {
        // Logic to handle password reset
        console.log('Resetting password for email:', email);
    };

    return (
        <Screen style={styles.container}>
            <Text
                style={{
                    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
                    fontSize: 25,
                    color: '#000',
                    fontWeight: 'bold',
                    marginTop: 50,
                    marginBottom: 20, // Adjusted margin for a more compact layout
                }}
            >
                Saisissez votre mail
            </Text>
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
            />



            <AppButton title="Envoyer la demande" onPress={handleGoBack} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
    },
    forgotPassword: {
        // Styles for the "Mot de passe oublié ?" link
    },
});

export default ForgotPassword;
