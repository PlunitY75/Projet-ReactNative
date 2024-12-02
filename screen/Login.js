import React, { useEffect, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingViewBase
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { addDoc, collection } from 'firebase/firestore';
import firebase from "firebase/compat";
import GoogleButton from "../components/GoogleButton";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    // GOOOOOGLEEEE ///////////////
    const [userInfo, setUserInfo] = React.useState();
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId:"950846412834-np01iplg4tc9179fihj21pb35n687mb3.apps.googleusercontent.com",
        androidClientId:"950846412834-bc3iktt5p4ocehji4l5csojbnhtkt9km.apps.googleusercontent.com",
    });

    React.useEffect(() => {
        if(response?.type == "success"){
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    const navigation = useNavigation();

    const handleNavigateToSignin = () => {
        navigation.navigate('Signin');
    };

    const handleNavigateToForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };
    const handleToMainContainer = () => {
        navigation.navigate('MainContainer');
    }
    const handleLogin = () => {
        // Vous pouvez effectuer la logique de connexion/authentification ici
        if (!email || !password) {
            console.log('Veuillez remplir tous les champs.');
            return; // Stop the function if fields are not filled
        }
        // Perform your login/authentication logic here
        console.log('Email:', email, 'Password:', password);
        // Navigate to HomeScreen if login is successful
        navigation.navigate('HomeScreen');
    };

    const handleForgotPassword = async () => {
        console.log('Mot de passe oublié ?');
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Un email de réinitialisation du mot de passe a été envoyé à votre adresse email.');
        } catch (error) {
            console.log(error);
            alert("Échec de l'envoi. Veuillez saisir une email.");
        }
    };
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert("Identifiant ou mot de passe incorrect")
        } finally {
            setLoading(false);
        }
    }
    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            // Ajouter l'email dans la collection "users" de Firestore
            await addDoc(collection(FIREBASE_DB, 'users'), {
                email: email
            });
            alert('Check tes mails ! ');
        } catch (error) {
            console.log(error);
            alert("Identifiant ou mot de passe incorrect")
        } finally {
            setLoading(false);
        }
    }
    return (
        <Screen style={styles.container}>
            <Text
                style={{
                    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
                    fontSize: 30,
                    color: '#000',
                    fontWeight: 'bold',
                    marginTop: 50,
                    marginBottom: 120,
                }}
            >
                Connecte toi !
            </Text>

            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={(text) =>
                    {setEmail(text);
                    console.log(text);
                }}
                placeholder="Email"
                textContentType="emailAddress"
                value={email}
                style={{ color: '#000' }}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={(text) => setPassword(text)} // Utilisez setPassword pour mettre à jour l'état du mot de passe
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                textContentType="password"
                style={{ color: '#000' }}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View>
                    <AppButton title={"Se connecter"} onPress={signIn} />
                    <TouchableOpacity style={styles.forgotPassword} onPress={signUp}>
                        <Text
                            style={{
                                color: '#000',
                                fontWeight: 'bold',
                                fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
                                textAlign: 'right',
                                marginBottom: 20,
                            }}
                        >
                            S'inscrire
                        </Text>
                    </TouchableOpacity>
                    <GoogleButton onPress={() => promptAsync()}/>
                </View>
            )}

            <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
                <Text
                    style={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
                        textAlign: 'right',
                        marginBottom: 20,
                    }}
                >
                    Mot de passe oublié ?
                </Text>
            </TouchableOpacity>
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
});

export default Login;
