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
import SearchScreen from '../screens/Search';
import AboutScreen from '../screens/About';
//navigation stack
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const About = createStackNavigator();
//drawer
const Drawer = createDrawerNavigator();

const CustomHeaderButton = (props) => (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={25}
      color={Platform.OS === "android" ? colors.primaryColor : "white"}
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
            headerTintColor: Platform.OS === "android" ?  colors.primaryColor : "white",
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
            <HomeStack.Screen name = "Organization Details" component={OrganizationDescriptionScreen}/>
        </HomeStack.Navigator>
    )
}
//favorites screen stack
const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator 
        screenOptions={({ navigation, route }) => ({
            ...defaultStackNavOptions,
            headerRight: () => (
              <HeaderMenuButton navigation={navigation} route={route} />
            ),
          })}>
            <SearchStack.Screen name = "Search" component={SearchScreen}/>
            <SearchStack.Screen name = "Animal Details" component={AnimalDescriptionScreen}/>
            <SearchStack.Screen name = "Organization Details" component={OrganizationDescriptionScreen}/>

        </SearchStack.Navigator>
    )
}
//the about screen stack
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
                <Drawer.Screen name = "Search" component = {SearchStackNavigator}/>
                <Drawer.Screen name = "About" component= {AboutStackNavigator}/>
            </Drawer.Navigator>

        </NavigationContainer>
    );


};
export default PetTownNavigator;