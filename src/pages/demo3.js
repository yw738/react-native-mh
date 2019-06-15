import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    TextInput,
    Image,
    ToastAndroid,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Button,Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import dimensions from 'Dimensions';
const {width,height} = dimensions.get('window');
import TabNavigator from 'react-native-tab-navigator';
/*看到生命周期*/
export default class demo3 extends Component {
    //es6 写法。getInitalState()初始化state 已被淘汰。用constructor代替 。
    constructor(props) {
        super(props);  //执行父类的方法
        this.state = {
            tit:'测试',
            data:[],
            isLoading:true,
            num:0,
            selectedTab:'home'
        };
    }
    render() {
        return (
            <View style={style.sec}>
                <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560093910564&di=362c4034fb975cb295cc89acce9c700f&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F01f44ee6d341eeb5ac4d6e48a2ec2b3b37f87d5d.jpg'}} style={{width:width,height:120}}/>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}//切换成分页-->自动分页
                    scrollEnabled={true} //非禁止滚动
                    onMomentumScrollEnd={(e)=>this.scrollEnd(e)}
                >
                    {this.scrollChild()}
                </ScrollView>
                <View style={{flexDirection:'row',position:'absolute',bottom:0,backgroundColor:'rgba(0,0,0,0.4)',width:width,alignItems:'center',justifyContent:'center',letterSpacing:'2'}}>
                    {this.scrollRadius()}
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
                        title="业务服务"
                    >
                        <View>
                            <Text>这是首页</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home2'}
                        selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
                        title="业务服务"
                    >
                        <View>
                            <Text>这是首页</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home3'}
                        selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
                        title="业务服务"
                    >
                        <View>
                            <Text>这是首页</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home4'}
                        selectedTitleStyle={{color:"#007aff"}}//设置tab标题颜色
                        title="业务服务"
                    >
                        <View>
                            <Text>这是首页</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
    scrollChild(){
        let png = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560093910564&di=362c4034fb975cb295cc89acce9c700f&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F01f44ee6d341eeb5ac4d6e48a2ec2b3b37f87d5d.jpg';
        let arr=[];
        let list = [png,png,png];
        for (var i=0;i<list.length;i++){
            var src = list[i];
            //require 中的图片名字必须是一个静态字符串（不能使用变量！因为 require 是在编译时期执行，而非运行时期执行！）。
            arr.push(
                    <Image key={i} source={{uri:src}} style={{width:width,height:120}}>
                    </Image>
            )
        }
        return arr
    }

    scrollRadius(){
        let arr = [];
        for (var i=0;i<3;i++){
            var color = i == this.state.num ? {color:'#fff'}:{color:'red'};
            arr.push(
                <Text key={i} style={[{fontSize:25},color]}>&bull;</Text>
            )
        }
        return arr
    }
    scrollEnd(e){
        let offset = e.nativeEvent.contentOffset.x;
        let page = Math.ceil(offset / width);
        console.log(offset,page,offset / width);
        this.setState({
            num:page
        })
    }
}

const style = StyleSheet.create({
    btn:{
        width:200,
        height:50,
        backgroundColor:'#ccc'
    },
    sec:{

    },
    img:{
        width: 100,
        height: 100,
        borderRadius:50,
        marginTop:50,
        borderWidth:2,
        borderColor:"red",
    },
    flex:{
        width:'100%',
        height:40,
        // display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    flex1:{
        // flex:1,
        borderColor:'red',
        borderWidth:2
    }
});
module.exports = demo3;