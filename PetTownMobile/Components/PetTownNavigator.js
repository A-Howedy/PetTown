import React from 'react';
import { Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import {HeaderButtons, HeaderButton, Item} from "react-navigation-header-buttons";
import colors from "../Constants/colors"
//screens
import HomeScreen from '../screens/HomeScreen';
import AnimalDescriptionScreen from '../screens/AnimalDescriptionScreen';
import OrganizationDescriptionScreen from '../screens/OrganizationDescriptionScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/About';
//navigation stack
const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const Organization = createStackNavigator();
const Animal = createStackNavigator();
const About = createStackNavigator();
//drawer
const Drawer = createDrawerNavigator();

const CustomHeaderButton = (props) => (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={25}
      color={Platform.OS === "android" ? colors.headerTextColor : "white"}
    />
  );

const HeaderMenuButton = (props) => { 
    return (
        <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
            <Item
                title = "Menu"
                iconName={Platform.OS === "android" ? "md-more":"ios-more"}
                onPress={ () => {
                    props.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    )
};

const defaultStackNavOptions = {    
            headerStyle:{
                backgroundColor: Platform.OS === "android" ? colors.headerAccentColor: "white"
            },
            headerTitleStyle: {
                fontSize: 28,
                fontFamily: "quicksand-bold",
            },
            headerTintColor: Platform.OS === "android" ?  colors.headerTextColor : "white",
            headerTitle: "PetTown",           
};

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
        screenOptions={({ navigation, route }) => ({
            ...defaultStackNavOptions,
            headerRight: () => (
              <HeaderMenuButton navigation={navigation} route={route} />
            ),
          })}>
            <HomeStack.Screen name = "Home" component={HomeScreen}/>
            <HomeStack.Screen name = "Animal Details" component={AnimalDescriptionScreen}/>
        </HomeStack.Navigator>
    )
}
//need to change these file names and add a detail screen

const OrganizationDescriptionNavigator = () => {
    return (
        <Organization.Navigator screenOptions= {defaultStackNavOptions}
            screenOptions={({ navigation, route }) => ({
                ...defaultStackNavOptions,
                headerRight: () => (
                <HeaderMenuButton navigation={navigation} route={route} />
                ),
            })}>
            <Organization.Screen name = "Organization List" component={OrganizationDescriptionScreen}/>
            <Organization.Screen name = "Home" component={HomeScreen}/>
        </Organization.Navigator>
    )
}
const AnimalDescriptionNavigator = () => {
    return (
        <Animal.Navigator
            screenOptions={({ navigation, route }) => ({
                ...defaultStackNavOptions,
                headerRight: () => (
                <HeaderMenuButton navigation={navigation} route={route} />
                ),
            })}>
            <Animal.Screen name = "Animal List" component={AnimalDescriptionScreen}/>
            <Animal.Screen name = "Home" component={HomeScreen}/>
        </Animal.Navigator>
    )
}
const FavoriteStackNavigator = () => {
    return (
        <FavoriteStack.Navigator 
        screenOptions={({ navigation, route }) => ({
            ...defaultStackNavOptions,
            headerRight: () => (
              <HeaderMenuButton navigation={navigation} route={route} />
            ),
          })}>
            <FavoriteStack.Screen name = "Favorites" component={FavoritesScreen}/>

        </FavoriteStack.Navigator>
    )
}
const AboutStackNavigator = () =>{
    return (
        <About.Navigator 
            screenOptions={({ navigation, route }) => ({
            ...defaultStackNavOptions,
            headerRight: () => (
              <HeaderMenuButton navigation={navigation} route={route} />
            ),
          })}>
              <About.Screen name = "About" component={AboutScreen}/>
        </About.Navigator>
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
                <Drawer.Screen name = "About" component= {AboutStackNavigator}/>
            </Drawer.Navigator>

        </NavigationContainer>
    );


};
export default PetTownNavigator;