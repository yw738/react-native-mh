import React, { Component } from 'react';
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
import dimensions from 'Dimensions';
const { width } = dimensions.get('window');

/*看到生命周期*/
export default class Swiper extends Component {
    //es6 写法。getInitalState()初始化state 已被淘汰。用constructor代替 。
    constructor(props) {
        super(props);  //执行父类的方法
        this.state = {};
    }
    componentDidMount() { }
    render() {
        let { data = [], height = 220, detailFn } = this.props;
        return (
            <View style={{ height: height }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}//切换成分页-->自动分页
                    scrollEnabled={true} //非禁止滚动
                >
                    {data && data.map((v, i) => {
                        return (<TouchableOpacity
                            activeOpacity={0.9}
                            key={i} style={{ width: width, height: height }} onPress={() => this.props.detailFn(v.link)}>
                            <Image style={{ width: width, height: height }} source={{ uri: v.url }} />
                        </TouchableOpacity>)
                    })}
                </ScrollView>
            </View>
        );
    }

}
module.exports = Swiper;