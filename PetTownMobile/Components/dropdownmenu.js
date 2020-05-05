import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Colors from '../Constants/colors';

//initially this filter option will be blank
//it will be updated whenever the user selects a category to search for

class Example extends Component {
    constructor(props){
        super(props);
        this.onChangeText = this.onChangeCategory.bind(this);
        this.state = {
            filters:[{value:''}],
        };
    }

    test=(t)=>{console.log(t)};
    onChangeCategory(text){
        //change the data displayed in the second dropdown
        switch(text){
            case 'Animal':
                this.props.catCallBack("Animal"); 
                this.setState({
                    filters:AnimalFilters
                });
            break;
            case 'Organization':
                this.props.catCallBack("Org");
                this.setState({
                    filters:OrganizationFilters
                });
            break;
            default:
                console.log("please select an actual case");

        }
        console.log(text);
    }
  render() {
    //update the filters to match the current state
    //this means that the filter dropdown menu will dynamically update
    //whenever the user searches a new category
    let Filters = this.state.filters;

    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Dropdown
                    label='Category'
                    data={Category}
                    onChangeText={this.onChangeText}
                />
            </View>
            <View style={{width:250, marginLeft:8}}>
            <Dropdown
                    label='Filter'
                    data={Filters}                    
                    onChangeText={(text)=>{this.props.filterCallBack(text)}}
                />  
            </View>
        </View>
      
    );
  }
}
const OrganizationFilters = [
    {value:'Name'},
    {value:'City'},
    {value:'State'},
    {value:'ZipCode'},
];
const AnimalFilters = [
    {value:'Name'},
    {value:'Species'},
]
const Category = [
    {value: 'Animal'},
    {value:'Organization'}
];
const styles = StyleSheet.create(
    {
        container:{
            flexDirection:'row',            
            shadowColor: Colors.primaryColor,
            shadowOffset:{width:0,height:2},
            shadowRadius:6,
            shadowOpacity:0.25,
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10,
            backgroundColor:"white",
            marginVertical:5,
            width: '100%'
        },
    }
)
export default Example;