import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../Constants/colors'

const OrganizationDescriptionScreen = props =>{
    //used for finding the specified organization passed in from the navigation props
    //searches for the required orgID
    let OrganizationID = -1;
    if(typeof props.route.params != undefined){
        OrganizationID = props.route.params['id'];
    }else{OrganizationID = -1;}
    const foundOrg = useSelector((state)=>state.Orgs.allOrgs.find((org) => org.id == OrganizationID));
    console.log(foundOrg);
    return(
    
    <View style={styles.container}>
        <Image style={{flex:3/4, alignSelf:'center'}} resizeMode='contain' 
        source={require('../assets/businessdog.jpg')}/>
        <Text style={styles.description}>
            {foundOrg.name}{'\n'}
            {foundOrg.address}{'\n'}
            {foundOrg.city}{'\n'}
            {foundOrg.state}{'\n'}
            {foundOrg.zip}{'\n'}
            {foundOrg.country}{'\n'}
            {foundOrg.phone}{'\n'}
            {foundOrg.email}{'\n'}
            {foundOrg.orgurl}{'\n'}
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    description:{
        shadowColor: Colors.primaryColor,
            shadowOffset:{width:0,height:2},
            shadowRadius:2,
            shadowOpacity:0.25,
            elevation:5,
            borderRadius:2,
        fontFamily:'quicksand',
        padding:10,
    }});export default OrganizationDescriptionScreen;
