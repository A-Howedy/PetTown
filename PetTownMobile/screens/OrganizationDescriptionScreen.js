import React from 'react';
import {StyleSheet, View, Text, ColorPropType} from 'react-native';
import {useSelector} from 'react-redux';

const OrganizationDescriptionScreen = props =>{
    //used for finding the specified organization passed in from the navigation props
    //searches for the required orgID
    let OrganizationID = -1;
    if(typeof props.route.params != undefined){
        OrganizationID = props.route.params['id'];
    }else{OrganizationID = -1;}
    const foundOrg = useSelector((state)=>state.Orgs.allOrgs.find((org) => org.orgID == OrganizationID));
    
    return(
    <View>
        <Text>aaaa
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({});
export default OrganizationDescriptionScreen;
