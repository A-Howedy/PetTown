import React, { useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    SafeAreaView,
    RefreshControl,} from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as animalActions from "../store/Actions/animals"
import * as orgActions from "../store/Actions/organizations"
//import data



const HomeScreen = props =>{
    const [isLoading, setIsLoading] = useState(false);
    //import animal list from the passed in reducer
    const Animals = useSelector((state) => state.Animals.allAnimals);
    const Orgs = useSelector((state)=> state.Orgs.allOrgs);
    const dispatch = useDispatch();
    
    const loadAnimals = useCallback(async () => {
        setIsLoading(true);
        try{
            await dispatch(animalActions.getAnimals());
            await dispatch(orgActions.getOrgs());
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
        initialNumToRender={300}
        keyExtractor={(item, index) => item.id.toString()} 
        data={Animals}
        windowSize={10}
        numColumns={2}
        renderItem={renderItemHandler}
        />
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start',
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
        width: '50%'
    },
    listItemItem:{
        padding:10,
    },

});
export default HomeScreen;
