import React, { useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as animalActions from "../store/Actions/animals"
//import data



const HomeScreen = props =>{
    //import animal list from the passed in reducer
    const Animals = useSelector((state) => state.Animals.allAnimals);
    const dispatch = useDispatch();
    
    const loadAnimals = useCallback(async () => {
        try{
            await dispatch(animalActions.getAnimals());
        }
        catch (e){

        }
        
    },[dispatch]
    );

    useEffect(() => {
        loadAnimals();
    },[dispatch]);


    const findAnimal = (id) => {
        //console.log(id)
        props.navigation.navigate("Animal Details",{id : id});
    };

    const renderItemHandler = ({item}) =>{
        return(
            //take the extracted item and display a discounted version to the user, i.e name and
            //species
            <View style={styles.listItem}>
                <TouchableOpacity onPress = {() => {findAnimal(item.id)}} useForeground>
                <Text style={styles.listItemItem}>Here is our lucky animal for today! {item.id}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return(<View style={styles.screen}>
        <FlatList style={styles.list}
        //extract the id and render it to the screen
        keyExtractor={(item, index) => item.id.toString()} 
        data={Animals}
        renderItem={renderItemHandler}

        />
        </View>);
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    list:{
        width: '100%',
        padding:10,
    },
    listItem:{
        shadowColor: Colors.primaryColor,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        elevation:5,
        borderRadius:10,
        backgroundColor:"white",
        marginVertical:5,
        width: '100%'
    },
    listItemItem:{
        padding:10,
    },

});
export default HomeScreen;
