import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//import data



const HomeScreen = props =>{
    //import animal list from the passed in reducer
    const Animals = useSelector(state => state.animals.allAnimals);
    
    const renderItemHandler = itemData=>{
        return(
            //take the extracted item and display a discounted version to the user, i.e name and
            //species
            <View style={styles.listItem}>
                <TouchableOpacity onPress={() =>{}} useForeground>>
                <Text style={listItemItem}>Here is our lucky animal for today! {itemData.item.name}</Text>
                <Text style={listItemItem}>They are a {itemData.item.species}</Text>
                </TouchableOpacity>

            </View>
        );
    }
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
        wdith="100%",
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
        width='100%'
    },
    listItemItem:{
        padding:10,
    }

});
export default HomeScreen;
