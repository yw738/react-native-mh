import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import { Button,Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import dimensions from 'Dimensions';
const {width,height} = dimensions.get('window');
import TabNavigator from 'react-native-tab-navigator';

import Home from './home'
import My from './my'
import Find from './find'
/*看到生命周期*/
export default class main extends Component {
    static navigationOptions = {
        header:null 
    };
    //es6 写法。getInitalState()初始化state 已被淘汰。用constructor代替 。
    constructor(props) {
        super(props);  //执行父类的方法
        this.state = {
            tit:'测试',
            data:[],
            isLoading:true,
            num:0,
            selectedTab:'Home',
            tabList:[
                {
                    title:'首页',
                    icon:require('./../images/icon/home.png'),
                    tabName:'Home',
                    component:Home
                },
                {
                    title:'收藏',
                    icon:require('./../images/icon/find.png'),
                    tabName:'Find',
                    component:Find
                },
                {
                    title:'我的',
                    icon:require('./../images/icon/my.png'),
                    tabName:'My',
                    component:My
                },
            ]
        };
    }
    render() {
        return (
                <TabNavigator>
                    {this.init()}
                </TabNavigator>
        );
    }
    init(){
        let that = this;
        let arr = this.state.tabList;
        let arr2 = [];
        arr.forEach((item,i)=>{
            arr2.push(<TabNavigator.Item
                key={i}
                renderIcon={()=><Image source={item.icon} style={{height:24,width:24}}/>}
                selected={that.state.selectedTab === item.tabName}
                selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
                title={item.title}
                onPress={()=>{that.setState({selectedTab:item.tabName})}}
            >
                <item.component navigation={this.props.navigation}/>
            </TabNavigator.Item>)
        });
        return arr2
    }
}

const style = StyleSheet.create({});
module.exports = main;