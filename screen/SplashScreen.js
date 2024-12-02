import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Vérifier si 'navigation' est défini avant d'utiliser la méthode 'replace'
            if (navigation) {
                navigation.replace('Login');
            } else {
                // Gérer le cas où 'navigation' est undefined
                console.warn("La navigation est undefined dans le SplashScreen.");
                // Vous pouvez rediriger l'utilisateur vers une autre page ou effectuer une autre action ici
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AntDesign name="home" size={24} color="black" />
            <Text>PowerHooome</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashScreen;
