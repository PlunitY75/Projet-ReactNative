import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import Signin from "./Signin";
import ForgotPassword from "./ForgotPassword";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {FIREBASE_AUTH} from "../FirebaseConfig";
import DetailsScreen from "../navigation/screen/DetailsScreen";
import MainContainer from "../navigation/MainContainer";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
    return(
        <InsideStack.Navigator>
            <InsideStack.Screen name={"test"} component={Login}/>
        </InsideStack.Navigator>
    )
}

export default function MainScreen() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            console.log('user', user);
            setUser(user);
        });
    }, []);
  return (
        <Stack.Navigator initialRouteName="Login">
            { user ? (
                <Stack.Screen name="MainContainer" component={MainContainer} options={{headerShown: false}}/>
            ) : (
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            )}
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
  );
}