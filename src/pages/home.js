import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
    };
    render() {
        return (
            <View >
                <View>
                    <TouchableOpacity
                        onPress={() => {
                this.props.navigation.navigate('HomeDetail',{title:'首页选中的id'})
          }}>
                        <Text >点我</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
module.exports = Home;