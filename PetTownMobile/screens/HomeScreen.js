import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
//import data



const HomeScreen = props =>{
    const Animals = useSelector(state => state.Animals.allAnimals);
    
    const renderItemHandler = itemData=>{
        return(
            <View style={styles.listItem}>
                <Text>Here is our lucky animal for today! {itemData.item.name}</Text>
            </View>
        );
    }
    return(<View style={styles.screen}>
        <FlatList
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
    listItem:{
        margin:5,
        padding:10,
    }

});
export default HomeScreen;
