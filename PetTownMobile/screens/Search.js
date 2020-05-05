//this screen will be used to search for a specific pet/organization
//when entered the screen will prompt the user to specify some limiters used in the search
import React, { useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, FlatList,View,SafeAreaView,RefreshControl} from 'react-native';
import SearchHeader from '../Components/searchheader';
const SearchScreen = (props)=>{
    return(     
        <View style={{flex:1}}>          
          <SearchHeader/>                
        </View>     
        );
}
export default SearchScreen;