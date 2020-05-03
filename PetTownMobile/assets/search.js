import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import SearchHeader from 'react-native-search-header';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#0097a7'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        marginBottom: 6,
        backgroundColor: '#00bcd4'
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        textAlign: `left`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});

const Example1 = (props) => {
    const searchHeaderRef = React.useRef(null);
    const {
        navigation
    } = props;

    return (
        <View style = { styles.container }>
            <StatusBar barStyle = 'light-content' />
            <View style = { styles.status }/>
            <View style = { styles.header }>
                <Text style = { styles.label } > Example 1 </Text>
                <Button
                    title = 'Search'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.show()}
                />
                <Button
                    title = '>'
                    color = '#f5fcff'
                    onPress = {() => navigation.navigate(`example2`)}
                />
            </View>
            <SearchHeader
                ref = { searchHeaderRef }
                placeholder = 'Search...'
                placeholderColor = 'gray'
                autoFocus = { true }
                visibleInitially = { false }
                persistent = { false }
                enableSuggestion = { true }
                entryAnimation = 'from-right-side'
                pinnedSuggestions = {[ `react-native-search-header`, `react-native`, `javascript` ]}
                topOffset = { 36 }
                iconColor = 'gray'
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
                onClear = {() => {
                    console.log(`CLEAR`);
                }}
                onGetAutocompletions = {async (text) => {
                    if (text) {
                        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                            method: `get`
                        });
                        const data = await response.json();
                        return data[1];
                    }
                    return [];
                }}
                onEnteringSearch = {(event) => {
                    console.log(event.nativeEvent.text);
                }}
                onSearch = {(event) => {
                    console.log(event.nativeEvent.text);
                }}
                style = {{
                    header: {
                        height: 62,
                        backgroundColor: `#fdfdfd`
                    }
                }}
            />
            <View style = { styles.button }>
                <Button
                    title = 'Show'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.show()}
                />
            </View>
            <View style = { styles.button }>
                <Button
                    title = 'Hide'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.hide()}
                />
            </View>
            <View style = { styles.button }>
                <Button
                    title = 'Clear'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.clear()}
                />
            </View>
            <View style = { styles.button }>
                <Button
                    title = 'Clear Suggestion'
                    color = '#f5fcff'
                    onPress = {() => searchHeaderRef.current.clearSuggestion()}
                />
            </View>
            <View style = { styles.button }>
                <Button
                    title = 'Next'
                    color = '#f5fcff'
                    onPress = {() => navigation.navigate(`example2`)}
                />
            </View>
        </View>
    );
};
export default Example1;