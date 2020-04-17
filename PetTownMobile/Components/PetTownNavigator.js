import React from 'react';
import { Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from '../screens/HomeScreen';
import AnimalDescriptionScreen from '../screens/AnimalDescriptionScreen';
import OrganizationDescriptionScreen from '../screens/OrganizationDescriptionScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();

const Organization = createStackNavigator();
const Animal = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name = "Home" component={HomeScreen}/>

        </HomeStack.Navigator>
    )
}
//need to change these file names and add a detail screen

const OrganizationDescriptionNavigator = () => {
    return (
        <Organization.Navigator>
            <Organization.Screen name = "Organization List" component={OrganizationDescriptionScreen}/>
            <Organization.Screen name = "Home" component={HomeScreen}/>
        </Organization.Navigator>
    )
}
const AnimalDescriptionNavigator = () => {
    return (
        <Animal.Navigator>
            <Animal.Screen name = "Animal List" component={AnimalDescriptionScreen}/>
            <Animal.Screen name = "Home" component={HomeScreen}/>
        </Animal.Navigator>
    )
}
const FavoriteStackNavigator = () => {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name = "Favorites" component={FavoritesScreen}/>

        </FavoriteStack.Navigator>
    )
}

const PetTownNavigator = () => {
    return (
        <NavigationContainer>

            <Drawer.Navigator initialRouteName="Home" drawerPosition='right'>
                <Drawer.Screen name = "Home" component = {HomeStackNavigator}/>                
                <Drawer.Screen name = "Animal List" component = {AnimalDescriptionNavigator}/>
                <Drawer.Screen name = "Organization List" component = {OrganizationDescriptionNavigator}/>
                <Drawer.Screen name = "Favorites" component = {FavoriteStackNavigator}/>
            </Drawer.Navigator>

        </NavigationContainer>
    );


};
export default PetTownNavigator;