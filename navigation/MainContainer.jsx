import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';
import SettingsScreen from './screen/SettingsScreen';
import PreferenceScreen from "./screen/PreferenceScreen";
import ReservationScreen from "./screen/ReservationScreen";
import HeaderApp from "../components/header/Header";

//Screen names
const homeName = "Mon Habitat";
const detailsName = "Liste";
const settingsName = "Notifications";
const preferenceName = "Préférence";
const reservationName = "Réservation";

const Tab = createMaterialBottomTabNavigator();

const MainContainer = () => {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        activeColor='#1e39e8'
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}>
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarLabel: 'Mon Habitat',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
          <Tab.Screen
              name={detailsName}
              component={DetailsScreen}
              options={{
                  tabBarLabel: 'Liste',
                  tabBarIcon: ({ color }) => (
                      <Ionicons name="list" color={color} size={26} />
                  ),
              }}
            />
        <Tab.Screen
            name={settingsName}
            component={SettingsScreen}
            options={{
                tabBarLabel: 'Notifications',
                tabBarIcon: ({ color }) => (
                <Ionicons name="settings" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name={preferenceName}
            component={PreferenceScreen}
            options={{
                tabBarLabel: 'Préférence',
                tabBarIcon: ({ color }) => (
                <Ionicons name="cog" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name={reservationName}
            component={ReservationScreen}
            options={{
                tabBarLabel: 'Réservation',
                tabBarIcon: ({ color }) => (
                <Ionicons name="calendar" color={color} size={26} />
                ),
            }}
        />
      </Tab.Navigator>
  );
}

export default MainContainer;