import React, { useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    Image,
    SafeAreaView,
    RefreshControl,} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../Constants/colors'
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
        let pic = require('../assets/missing.png');
        if(item.species=='Dog'){
            pic=require('../assets/dog.jpg');
        }else if(item.species=='Cat'){
            pic= require('../assets/cat.jpg');
        }
        return(
            //take the extracted item and display a discounted version to the user, i.e name and
            //species
            //lets also put a funky picture in there because pictures are cool!
            <View style={styles.listItem}>
                <TouchableOpacity 
                style={{flex:1/2, aspectRatio:1}}
                onPress = {() => {findAnimal(item.id)}} useForeground>
                <Image style={{flex:1, alignSelf:'center'}}
                resizeMode='contain' source={pic}/>
                <Text style={styles.listItemItem}>
                    {item.name}{'\n'}
                    {item.species}{'\n'}
                    {item.status}
                    </Text>
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
        removeClippedSubviews={true}
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
        backgroundColor:Colors.background,
        width: '100%',
        padding:5,
    },
    listItem:{
        shadowColor: Colors.primaryColor,
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        elevation:5,
        borderRadius:10,
        backgroundColor:"white",
        marginVertical:8,
        marginHorizontal:4,
        width: '48%'
    },
    listItemItem:{
        padding:10,
    },

});
export default HomeScreen;
