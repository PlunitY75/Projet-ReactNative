import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from "./screen/MainScreen";
import HeaderApp from "./components/header/Header";

export default function App() {
    return (
            <NavigationContainer>
                <HeaderApp/>
                <MainScreen/>
            </NavigationContainer>
    )
}