//this screen will be used to search for a specific pet/organization
//when entered the screen will prompt the user to specify some limiters used in the search
import React, { useEffect, useCallback, useState} from 'react';
import {Component, StyleSheet, Text, View, Image, TouchableHighlight,
Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import SearchHeader from '../Components/searchheader';
import DropDown from '../Components/dropdownmenu'

const SearchScreen = (props)=>{

    //animals and organizations will already be loaded from the home screen,
    //we should be able to call the loaded items directly from the redux storage 
    const setFilter = (selection, row)=>{
        //get the current filter that is selected by the user
        displayText = data[selection][row];
        console.log(displayText);
    }
    return(     
        <View>
        <SearchHeader/>
        <View style={{height:50}}/>
        <DropDown/></View>
          
     
            
        

    );
}
export default SearchScreen;