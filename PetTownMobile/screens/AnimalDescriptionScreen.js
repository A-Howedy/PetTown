import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const AnimalDescriptionScreen = props =>{
    console.log(props.route);
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
    
    return (
        <View>
            <Text style={styles.description}>
                
                {foundAnimal.name}{"\n"}
                {foundAnimal.orgID}{"\n"}
                {foundAnimal.status}{"\n"}
                {foundAnimal.species}{"\n"}
                {foundAnimal.sex}{"\n"}
                cool!
            </Text>
        </View>
    )
    
}
const styles = StyleSheet.create({
    description:{
        padding:10,
    }});
export default AnimalDescriptionScreen;
