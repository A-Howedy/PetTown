import React, { useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    SafeAreaView,
    RefreshControl,} from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as animalActions from "../store/Actions/animals"
//import data



const HomeScreen = props =>{
    const [isLoading, setIsLoading] = useState(false);
    //import animal list from the passed in reducer
    const Animals = useSelector((state) => state.Animals.allAnimals);
    const dispatch = useDispatch();
    
    const loadAnimals = useCallback(async () => {
        setIsLoading(true);
        try{
            await dispatch(animalActions.getAnimals());
        }
        catch (e){

        }
        setIsLoading(false);
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
                <Text style={styles.listItemItem}>Here is our lucky animal for today! {item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return(<SafeAreaView style={styles.screen}>
        <FlatList style={styles.list}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={loadAnimals}/>}

        keyExtractor={(item, index) => item.id.toString()} 
        data={Animals}
        renderItem={renderItemHandler}

        />
        </SafeAreaView>);
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
