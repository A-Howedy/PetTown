import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity,Image} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../Constants/colors'
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
    let pic = require('../assets/missing.png');
        if(foundAnimal.species=='Dog'){
            pic=require('../assets/dog.jpg');
        }else if(foundAnimal.species=='Cat'){
            pic= require('../assets/cat.jpg');
        }
    //get the org id from the animal data and create a link to the organization page
    const foundOrg = useSelector((state)=>state.Orgs.allOrgs.find((org) => org.orgID == foundAnimal.orgID));
    console.log(foundOrg);
    return (
        <View style={styles.container}>
            <Image style={{flex:3/4, alignSelf:'center'}} resizeMode='contain' source={pic}/>
            <TouchableOpacity onPress={() => findOrg(foundOrg.id)} useForeground>

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
    }});
export default AnimalDescriptionScreen;
