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
// let dimensions = require('Dimensions');
const {width,height} = dimensions.get('window');


/*看到生命周期*/
export default class My extends Component {
    //es6 写法。getInitalState()初始化state 已被淘汰。用constructor代替 。
    constructor(props) {
        super(props);  //执行父类的方法
        this.state = {
            tit:'测试',
            data:[],
            isLoading:true,
        };
    }
    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    data: responseJson.movies,
                }, function(){

                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        return (
            <View style={style.sec}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}//切换成分页-->自动分页
                    scrollEnabled={true} //非禁止滚动
                >
                    {this.scrollChild()}
                </ScrollView>
                <View >
                    <Image source={require('./../images/0fa611e63cfdadab2b35d916246401d1_68463571_p0.png')} style={style.img}/>
                    <TextInput
                        placeholder={'请输入账号'}
                    />
                    <TouchableOpacity
                        activeoOpacity={0.2}
                        onPress={()=>this.gg('点击')}//点击
                        onPressIn={()=>this.gg('按下')}//按下
                        onPressOut={()=>this.gg('抬起')}//抬起
                        onLongPress={()=>this.gg('长按')}//长按
                    >
                        <Text style={style.btn}>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>点我</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>{this.state.tit}</Text>
                    </View>
                </View>
                <View style={style.flex}>
                    <Text style={style.flex1}>忘记密码</Text>
                    <Text style={style.flex1}>注册</Text>
                </View>
                <View>
                    <Text>es6{this.props.tit}</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item})=>(
                        <Text>
                            {item.title}, => ,{item.releaseYear}
                        </Text>
                        )}
                    keyExtractor={(item,index)=>item.id}
                />
            </View>
        );
    }
    gg(ev){
        console.log(ev);
        this.setState({
            tit:ev
        })
    }
    scrollChild(){
        let arr=[];
        let color = ['red','yellow','#333333'];
        for (var i=0;i<color.length;i++){
            arr.push(
                <View key={i} style={{backgroundColor:color[i],width:width,height:120}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return arr
    }
}
//es6 的 getDefaultProps（）写法
const style = StyleSheet.create({
    btn:{
      width:200,
        height:50,
        backgroundColor:'#ccc'
    },
    sec:{
        flex:1,
        alignItems:'center',//水平居中 --- margin：0 auto
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
module.exports = My;