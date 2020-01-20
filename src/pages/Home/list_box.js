import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ListBox extends Component {
    constructor(props) {
        super(props);  //执行父类的方法
        this.state = {};
    }
    componentDidMount() { }
    render() {
        let { item = {}, height = 220, width, detailFn } = this.props;
        return (
            <TouchableOpacity style={[style.box, { width: width }]} activeOpacity={0.9} onPress={() => detailFn(item.link)}>
                <Image style={[style.img, { width: width - 10 }]} source={{ uri: item.img }} />
                <View >
                    <Text style={style.tit}>{item.tit}</Text>
                </View>
                <View >
                    <Text numberOfLines={1} style={style.txt}>{item.txt}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}
module.exports = ListBox;
const style = StyleSheet.create({
    box: {
        paddingLeft: 5,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    img: {
        borderRadius: 10,
        height: 160
    },
    tit: {
        marginTop: 5,
        fontSize: 16,
        color: '#121212',
        lineHeight: 24,
    },
    txt: {
        marginTop: 3,
        fontSize: 12,
        color: '#909090',
        lineHeight: 14,
        minHeight: 14,
    }
})