import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { mhList } from "./../api/api"
import Swiper from "./Home/Swiper"
import HomeBox from "./Home/Home_box"

export default class Home extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            imgList: [
                {
                    link: "/about?url=wbmh69831",
                    url:
                        "http://img.manhua.weibo.com/hcover/2018/09/07/2084322240_aOFgE7Cs.jpg"
                },
                {
                    link: "/about?url=wbmh72406",
                    url:
                        "http://img.manhua.weibo.com/hcover/2019/07/23/6580997788_6MmPC0WJ.jpg"
                },
                {
                    link: "/about?url=wbmh71017",
                    url:
                        "http://img.manhua.weibo.com/hcover/2018/12/24/6469545963_KjDiUXtX.jpg"
                },
                {
                    link: "/about?url=wbmh69375",
                    url:
                        "http://img.manhua.weibo.com/hcover/2018/09/21/2660188431_ELQqGaB3.jpg"
                }
            ],
            topBoxList: [
                {
                    link: "/about?url=http%3A%2F%2F99770.hhxxee.com%2Fcomic%2F32644",
                    img:
                        "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=9ed36f5f3f4e251fe6f7e3fa9787c9c2/e7cd7b899e510fb3d0c3baf2d633c895d0430cf9.jpg",
                    tit: "租借女友",
                    txt:
                        "作品讲述的是大学生木之下和也和从事恋人租赁服务“租赁女朋友”工作的水原千鹤间的恋爱喜剧"
                },
                {
                    link: "/about?url=mh123%2Fcomic%2F8550.html",
                    img: "https://img.detatu.com/upload/vod/2019-01-07/15467915857.jpg",
                    tit: "穿越球场",
                    txt:
                        "绪方夏树,初中刚毕业的爱好篮球的北国学生,因为以前的队友的怂恿而报名参加篮球名校藤原学院的选秀会"
                },
                {
                    link: "/about?url=mhz209859",
                    img:
                        "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8f5f2b8438adcbef15397654cdc645b8/a6efce1b9d16fdfaf0acd4aebd8f8c5495ee7ba9.jpg",
                    tit: "风夏",
                    txt:
                        "该漫画是濑尾公治以前作《凉风》的主人公秋月大和与朝比奈凉风之女——秋月风夏为女主角"
                },
                {
                    link: "/about?url=mh123%2Fcomic%2F2985.html",
                    img: "https://img.detatu.com/upload/vod/2019-01-06/154679024514.jpg",
                    tit: "东京80年代",
                    txt: "纯平参加早稻田大学的入学考试发现一个乡下女孩作弊（森下爱）"
                },
                {
                    link: "/about?url=http%3A%2F%2F99770.hhxxee.com%2Fcomic%2F3852",
                    img:
                        "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=352ab83f9922720e6fc3eaa81aa26123/5243fbf2b21193138ca3e2ed64380cd790238d8e.jpg",
                    tit: "有你的小镇",
                    txt: "桐岛青大追随突然消失的枝叶柚希，离开故乡广岛前往东京"
                },
                {
                    link: "/about?url=mh123%2Fcomic%2F8644.html",
                    img:
                        "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=3736e138a66eddc432eabca958b2dd98/472309f7905298224bccf61edcca7bcb0b46d474.jpg",
                    tit: "凉风",
                    txt:
                        "男主角秋月大和独自来东京求学，居住在澡堂宿舍楼中并与女主角朝比奈凉风恋爱的故事"
                }
            ],
            bottomList: [
                {
                    link: "/about?url=mh123%2Fcomic%2F8652.html",
                    img:
                        "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=bf79a24c0cb30f242197e451a9fcba26/cefc1e178a82b9018e60ca1e708da9773812efca.jpg",
                    tit: "寄生兽",
                    txt: "平凡的高中生泉新一和寄生在他体内"
                },
                {
                    link: "/about?url=mhz209676",
                    img:
                        "http://oss.mkzcdn.com/comic/cover/20190416/5cb571cd52a9f-899x1200.jpg!width-300",
                    tit: "黑社会的超能力女儿",
                    txt: "黑社会的超能力女儿漫画，黑社会干部与从天"
                },
                {
                    link: "/about?url=mh123%2Fcomic%2F8816.html",
                    img: "https://img.detatu.com/upload/vod/2019-01-07/15467916473.jpg",
                    tit: "请叫我英雄",
                    txt: "英雄是个曾有过半年连载经验的漫画家"
                },
                {
                    link: "/about?url=http%3A%2F%2F99770.hhxxee.com%2Fcomic%2F23246",
                    img:
                        "https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=6e79620112950a7b613846966bb809bc/21a4462309f79052ba537e0903f3d7ca7bcbd5bc.jpg",
                    tit: "家有女友",
                    txt: "夏生因为经常在顶楼遇上来此散心的女老师"
                },
                {
                    link: "/about?url=mh123%2Fcomic%2F8816.html",
                    img:
                        "https://res.gufengmh.com/gufeng/images/cover/201907/1562205744wS87exCVZduHRgPM.jpg",
                    tit: "深林之中",
                    txt: "带科幻元素的黑暗童话"
                },
                {
                    link: "/about?url=mh123%2Fcomic%2F10749.html",
                    img: "https://img.detatu.com/upload/vod/2019-01-07/154679216217.jpg",
                    tit: "鬼灭之刃",
                    txt: "时值日本大正时期。传说太阳下山后，恶鬼出没吃人"
                }
            ],
        }
    }
    componentWillMount() {
        // mhList().then(res => {
        //     console.log(res);
        // })
    }
    componentDidMount() {

    }
    detailFn = (link) => {
        console.log('点击的是：', link)
    }
    toSearch = () => {
        console.log('toSearch');
        this.props.navigation.navigate('Search',{title:'首页选中的id'})
    }
    render() {
        return (
            <View >
                <ScrollView>
                    <View style={style.header}>
                        <View style={style.searInput} onStartShouldSetResponder={() => this.toSearch()}>
                            <Image style={style.iocn} source={require('./../images/icon/search.png')} />
                            <TextInput
                                style={{
                                    paddingTop: 0,
                                    paddingBottom: 0
                                }}
                                editable={false}
                                placeholder={'请输入搜索关键词'}
                            />
                        </View>
                        <View style={style.rightBox}>
                            <Image style={style.iocn2} source={require('./../images/icon/class.png')} />
                            <Image style={[style.iocn2, { marginLeft: 20 }]} source={require('./../images/icon/icon_user.png')} />
                        </View>
                    </View>
                    <Swiper
                        data={this.state.imgList}
                        detailFn={this.detailFn} />
                    <View style={style.index_border} />
                    <HomeBox
                        title={'人氣推薦'}
                        data={this.state.topBoxList}
                        detailFn={this.detailFn} />
                    <View style={style.index_border} />
                    <HomeBox
                        title={'編輯推薦'}
                        data={this.state.bottomList}
                        detailFn={this.detailFn} />
                        
                    {/* <TouchableOpacity
                        onPress={() => {
                this.props.navigation.navigate('HomeDetail',{title:'首页选中的id'})
          }}>
                        <Text >点我</Text>
                    </TouchableOpacity> */}
                </ScrollView>
            </View>
        );
    }
}
module.exports = Home;
const style = StyleSheet.create({
    header: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    searInput: {
        height: 34,
        width: 180,
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
        alignItems: "center"
    },
    index_border: {
        backgroundColor: '#F8F8F9',
        borderColor: '#F4F4F4',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 10,
    }
})