import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AboutScreen = props =>{
    return(<View style = {styles.listItem}><Text>This is about</Text></View>);
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    listItem:{
        margin:5,
        padding:10,
    }
});
export default AboutScreen;
