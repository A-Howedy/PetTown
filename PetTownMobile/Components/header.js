import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Header = headerProps =>{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{headerProps.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create(
    {
    headerContainer : {
        width : '100%',
        height : 100,
        paddingTop: 30,
        backgroundColor : "#FFAD3E",
        alignItems : 'center',
        justifyContent : 'center',

    },

    header : {
        color : "#00FFFF",
        fontSize : 30,
        fontFamily : 'serif',
    },
});
export default Header;