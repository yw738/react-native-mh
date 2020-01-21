import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
// 搜索
import dimensions from 'Dimensions';
const { width, height } = dimensions.get('window');

export default class Search extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);  //执行父类的方法
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <View>
                <View style={[style.header, { borderBottomColor: '#ccc', borderBottomWidth: 1 }]}>
                    <View style={style.searInput}>
                        <Image style={style.iocn} source={require('./../../images/icon/search.png')} />
                        <TextInput
                            style={{
                                paddingTop: 0,
                                paddingBottom: 0
                            }}
                            placeholder={'请输入搜索关键词'}
                            onSubmitEditing={() => this.search()}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => this.back()}>
                        <Text>取消</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.header}>
                    <View><Text>搜索记录</Text></View>
                    <View>
                        <Image style={style.iocn} source={require('./../../images/icon/historyDel.png')} />
                    </View>
                </View>
                <View style={style.histToryBox}>
                {(()=>{
                    let arr = [];
                    for(var i=0;i<20;i++){
                        arr.push( <View style={style.item}>
                        <Text>拉拉手</Text>
                    </View>)
                    }
                    return arr
                })()}
                   

                </View>
            </View>
        );
    }
    search = () => {
        console.log('ok')
    }
    back = () => {
        this.props.navigation.goBack();
    }
}

const style = StyleSheet.create({
    header: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    searInput: {
        height: 34,
        width: width - 60,
        borderRadius: 15,
        backgroundColor: '#f7f8fa',
        paddingLeft: 10,
        flexDirection: 'row',
        fontSize: 12,
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    iocn: {
        height: 16,
        width: 16,
    },
    iocn2: {
        height: 24,
        width: 24,
    },
    rightBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center",

    },
    histToryBox: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
        flexWrap: 'wrap',
    },
    item: {
        backgroundColor: "#f3eeee",
        color: "#505050",
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 6,
    }
});
module.exports = Search;