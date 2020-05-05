
import React, { useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    SafeAreaView,
    RefreshControl,} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../Constants/colors'
import * as orgActions from "../store/Actions/organizations";
const AboutScreen = props =>{
    return(
        <View style={{flex:1, backgroundColor:Colors.background}}>
            <Text style={styles.text}>
                Hello! {'\n'}
                This is a town for pets!
            </Text>
        </View>
        )

}

const styles = StyleSheet.create({
    text:{       
        color:Colors.primaryColor,
        textShadowOffset:{width:0,height:2},
        textAlign:'center',
        fontSize:30,
        marginVertical:45,
        fontFamily:'quicksand',
        width: '100%'
    },
});
export default AboutScreen;
