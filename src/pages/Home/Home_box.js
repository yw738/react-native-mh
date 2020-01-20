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

import ListBox from "./list_box.js"
export default class HomeBox extends Component {
    constructor(props) {
        super(props);  //执行父类的方法
        this.state = {};
    }
    componentDidMount() { }
    render() {
        let { data = [],title="",detailFn } = this.props;
        return (
            <View >
                <View style={[style.header, style.flexC]}>
                    <View >
                        <Text style={{ fontSize: 20, color: '#121212', letterSpacing: 2 }}>{title}</Text>
                    </View>
                    <View style={[style.flexC]}>
                        <Text style={{ color: '#121212' }}>更多</Text>
                        <Image style={{ width: 20, height: 20, marginLeft: 8 }} source={require('./../../images/icon/next.png')} />
                    </View>
                </View>
                <View style={style.content}>
                    {
                        data.map((v, i) => {
                            return (<ListBox
                                key={i}
                                width={width / 3}
                                item={v}
                                detailFn={detailFn}
                                 />)
                        })
                    }
                </View>
            </View>
        );
    }
}
module.exports = HomeBox;
const style = StyleSheet.create({
    flexC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 20,

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap:'wrap'
    }
})