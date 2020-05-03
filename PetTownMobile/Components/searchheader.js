//this is the component used for the search header
//this component contains a search option along with filtering options
/*<DropdownMenu style ={styles.dropDown}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'green'}
        // arrowImg={}      
        // checkImage={}   
        // optionTextStyle={{color: '#333333'}}
        // titleStyle={{color: '#333333'}} 
        // maxHeight={300} 
        handler={(selection, row) => setFilter(selection,row)}
        data={data}
      />
      */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import DropDown from './dropdownmenu';
const searchSuggestions =['pet1'];
const searchH = (props) =>{
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
                console.log(event.nativeEvent.text);
            }}
        />    
    
    
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