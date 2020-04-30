import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const AnimalDescriptionScreen = props =>{
    //function for retreiving the organization based on the id found in the
    //animal description
    const findOrg = (id)=>{
        //send this bad boy to the organization details screen
        props.navigation.navigate("Organization Details",{id:id})
    }
    //snag the parameters sent by the navigator 
    let animalID = -1;
    if(typeof props.route.params != 'undefined'){
        animalID = props.route.params['id'];
    }
    else{
        animalID = -1;
    }
    
    const foundAnimal = useSelector((state) => state.Animals.allAnimals.find((animal) => animal.id == animalID));
    //get the org id from the animal data and create a link to the organization page
    const foundOrg = useSelector((state)=>state.Orgs.allOrgs.find((org) => org.id == foundAnimal.orgID));
    console.log(foundOrg);
    return (
        <View>
            <TouchableOpacity onPress={() => findOrg(foundAnimal.orgID)} useForeground>
            <Text style={styles.description}>
                
                {foundAnimal.name}{"\n"}
                {foundOrg.name}{"\n"}
                {foundAnimal.status}{"\n"}
                {foundAnimal.species}{"\n"}
                {foundAnimal.sex}{"\n"}
                cool!
            </Text>
            </TouchableOpacity>
        </View>
    )
    
}
const styles = StyleSheet.create({
    description:{
        padding:10,
    }});
export default AnimalDescriptionScreen;
