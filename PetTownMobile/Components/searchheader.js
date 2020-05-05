//this is the component used for the search header
//this component contains a search option along with filtering options

import React, {Component, useCallback, useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    SafeAreaView,
    FlatList,
    RefreshControl,
} from 'react-native';
import SearchHeader from 'react-native-search-header';
const searchSuggestions =['pet1'];
//use this function to dispatch the search to redux
//parents the component for the dropdown menu so we can pass the query through to it
import DropDown from '../Components/dropdownmenu'
import { useSelector, useDispatch, } from 'react-redux';

const searchH = props =>{
    const animals = useSelector((state)=>state.Animals.allAnimals)
    const orgs = useSelector((state)=>state.Orgs.allOrgs)
    const [query, updateQ] = useState("");
    const [category, updateC] = useState("Animal");
    const [filter,updateF] = useState("name");
    const [list,updateL] = useState([]);
    const updateSCategory=(c)=>{
        updateC(c);
    }
    const updateSFilter=(f)=>{updateF(f.toLowerCase());}
    const searchHandler=(event)=>{
        //update query
        updateQ(event.nativeEvent.text.toLowerCase());
    }
    const renderItemHandler = ({item}) =>{        
        //take the extracted item and display a discounted version to the user, i.e name and species
        return(
        <View style={styles.listItem}>
            <Text style={styles.listItemItem}>Here is our lucky animal for today! {item.name}</Text>
        </View>
        )
}
    const updateList= ()=>{
        switch(category){      
            case "Animal":
                updateL(animals.filter((a)=>a[filter].toLowerCase().includes(query)));
                break;
            case "Org":                
                updateL(orgs.filter((a)=>a[filter].toLowerCase().includes(query)));
                break;
            default:
                console.log("Please select a category")
                break;
        }
    }
    
    return(
        <View style={styles.container}>
            <SearchHeader
                style={styles.searchBar}
                placeholder = 'Search...'
                placeholderColor = 'gray'
                visibleInitially = { true }
                persistent = {true}
                pinnedSuggesstions = {searchSuggestions}
                topOffeset={36}
                iconColor='gray'
                iconImageComponents = {[{
                    name: `hide`,
                    customStyle: {
                        tintColor: 'red'
                    }
                }, {
                    name: `pin`,
                    customStyle: {
                        tintColor: 'red'
                    }
                }]}                 
                
                onSearch = {(event) => {
                    searchHandler(event);
                    updateList();
                }}
            />
            <View style={{height:50}}/>

            <DropDown catCallBack={updateSCategory} filterCallBack={updateSFilter}/>

            <View style={{flex:1}}>
            <SafeAreaView style={styles.screen}>
                <FlatList style={styles.list}
                initialNumToRender={50}
                keyExtractor={(item, index) => item.id.toString()} 
                data={list}
                extraData={true}
                renderItem={renderItemHandler}
                />
            </SafeAreaView>
             </View>            
        </View>
        )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        searchBar:{
            height: 62,
            backgroundColor: `#fdfdfd`
        },
        dropDown:{
            flex:2,
        },
        buttons:{
            width:100,
            height:40,
            borderRadius:2,
            backgroundColor:`#ff5722`
        }
    })
export default searchH;