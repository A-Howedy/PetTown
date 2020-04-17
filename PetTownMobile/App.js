import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import animalsReducers from './store/Reducers/Animals'
//screens
import PetTownNavigator from './Components/PetTownNavigator';
import AnimalDescriptionScreen from './screens/AnimalDescriptionScreen';
import OrganizationDescriptionScreen from './screens/OrganizationDescriptionScreen';

const rootReducer = combineReducers({
  Animals: animalsReducers
});
const dataStore = createStore(rootReducer);

const getData = () =>{
  return Font.loadAsync({
    quicksand: require('./assets/Quicksand-Medium.ttf'),
    "quicksand-bold": require('./assets/Quicksand-Bold.ttf')
  });
}

export default function App() {
  //create states
  const [dataLoaded, setDataLoaded] = useState(false);

  //check to see if the font is loaded
  if(!dataLoaded){
    return(
      
      <AppLoading startAsync={getData} 
      onFinish = { () => setDataLoaded(true)} 
      onError = {err => console.log(err)}
      ></AppLoading>
    );
  }

  
    
  return (
    <Provider store = {dataStore}>

    <PetTownNavigator/>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Name: {
    flex: 2,
    fontSize: 20,
    color: '#800000',
    fontFamily: 'quicksand',
  }
});
