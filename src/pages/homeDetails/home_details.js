import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,Button} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

// this.props.navigation.getParam（paramName，defaultValue）
export default class HomeDetail extends Component {
    static navigationOptions = {
        headerTitle: '详情页',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="btn"
                color="blue"
            />
        ),
        headerStyle: {            //标题栏样式
            backgroundColor: 'red',
        },
        headerTintColor: '#fff',  //标题文字和按钮颜色
        headerTitleStyle: {       //标题文字样式
            fontWeight: 'bold',
            // color:'blue' 如果这里也写了标题文字的颜色，那么会覆盖headerTintColor的颜色，即标题为蓝色
        },
    };

    render() {
        const navigation = this.props.navigation;
        const name = navigation.getParam('title', '默认值');//接收参数
        const age = navigation.getParam('age', 16);
        const prevObj = navigation.state.params;//直接访问 params 对象
        return (
            <View >
            <Text>{name}</Text>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({title: 'Updated!'})}
                />
            </View>
        );
    }
}

module.exports = HomeDetail;