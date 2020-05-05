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
    TouchableOpacity,
    Image,
} from 'react-native';
import SearchHeader from 'react-native-search-header';
const searchSuggestions =['pet1'];
//use this function to dispatch the search to redux
//parents the component for the dropdown menu so we can pass the query through to it
import Colors from '../Constants/colors'
import DropDown from '../Components/dropdownmenu'
import { useSelector, useDispatch, } from 'react-redux';

const searchH = (props) =>{
    let currentC = "Animal";
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
        //update parameters
        currentC = category;
        updateQ(event.nativeEvent.text.toLowerCase());
    }
    const renderItemHandler = ({item}) =>{        
        //take the extracted item and display a discounted version to the user, i.e name and species
        let pic = require('../assets/missing.png');
        if(item.species=='Dog'){
            pic=require('../assets/dog.jpg');
        }else if(item.species=='Cat'){
            pic= require('../assets/cat.jpg');
        }
        return(
        <View style={styles.listItem}>
            <TouchableOpacity 
                style={{flex:1/2, aspectRatio:1}}>
                <Image style={{flex:1, alignSelf:'center'}}
                resizeMode='contain' source={pic}/>
                <Text style={styles.listItemItem}>
                    {item.name}{'\n'}
                    {item.species}{'\n'}
                    {item.status}
                    </Text>
            </TouchableOpacity>
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
                windowSize={10}
                numColumns={2}
                removeClippedSubviews={true}
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
        list:{
            backgroundColor:Colors.background,

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
            marginVertical:8,
            marginHorizontal:4,
            width: '48%'
        },
        listItemItem:{
            fontFamily:'quicksand',
            padding:10,
        },
    })
export default searchH;