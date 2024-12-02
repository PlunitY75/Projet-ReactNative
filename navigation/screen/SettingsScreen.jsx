import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({ navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                // onPress={() => navigation.navigate('Liste')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Mes notifications</Text>
        </View>
    );
}