
import React, { useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    SafeAreaView,
    RefreshControl,} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as orgActions from "../store/Actions/organizations";
const AboutScreen = props =>{
    //test code for the organizations
    const [isLoading, setIsLoading] = useState(false);
    const Orgs = useSelector((state)=> state.Orgs.allOrgs);
    const dispatch = useDispatch();
    const loadOrgs = useCallback(async()=>{
        setIsLoading(true);
        try{
            await dispatch(orgActions.getOrgs());

        }catch(e){
            console.log(e);
        }
        setIsLoading(false);
    },[dispatch]);
    useEffect(()=>{
        loadOrgs();
    },[dispatch]);

    
    const renderItemHandler = ({item}) =>{
        return(
            //take the extracted item and display a discounted version to the user, i.e name and
            //species
            <View style={styles.listItem}>
                <Text style={styles.listItemItem}> {item.name}</Text>
                
            </View>
        );
    };
    return(<SafeAreaView style={styles.screen}>
        <FlatList style={styles.list}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={loadOrgs}/>}

        keyExtractor={(item, index) => item.id.toString()} 
        data={Orgs}
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
        width: '100%'
    },
    listItemItem:{
        padding:10,
    },

});
export default AboutScreen;
