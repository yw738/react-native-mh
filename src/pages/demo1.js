/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image} from 'react-native';
var Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
/*设置全局 属性*/
type Props = {};
let cols = 3;
let boxW = 100;
let lMargin = (width - cols * boxW) / (cols + 1);
let hMargin = 25;
// let lMargin = 10;
let url={
    uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};


export default class demo1 extends Component {
    render() {
        return (
            <View >
                <View style={style2.box}>
                    {this.forDemo1()}
                </View>
                <View>
                    <Text>测试</Text>
                    <Image source={url}>
                    </Image>
                </View>
                <View>
                    <TextInput
                        sryle={styleInput.box}
                        /*value={'我是默认文字'}//默认文字*/
                        keyboardType={'number-pad'}//调用键盘类型
                        multiline={true}
                        password={true}
                        placeholder={'占位符'}//占位文字
                        clearButtonMode={'always'}
                    ></TextInput>
                </View>
                <View>

                </View>
            </View>
        );
    }
    forDemo1(){
        let arr2=[];
        let arr=['1','2','3','4','5','6'];
        for (var i=0;i<arr.length;i++){
            arr2.push(
                <View key={i} style={style2.item}>
                    <Text>
                        {arr[i]}
                    </Text>
                </View>
            )
        }
        return arr2
    }
}

const style2=StyleSheet.create({
    box:{
        height:400,
        width:400,
        backgroundColor:'#fff',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    item:{
        height:boxW,
        width:boxW,
        backgroundColor:'#ff4400',
        alignItems:'center',
        marginLeft:lMargin,
        marginTop:hMargin,
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
const styleInput = StyleSheet.create({
    /*输入框*/
    box:{
        width:100,
        height:30,
        borderWidth:1,
        borderColor:'#e8e8e8'
    },

});
module.exports = demo1;