
# react-native-mh

```

react-native-mh

版本：0.59.8

食用方法。如果做了，请跳过：

1、clone项目

2、使用yarn管理包，安装yarn

npm install -g yarn
查看版本：yarn --version

3、安装项目依赖

在项目根目录运行 yarn 命令

4、安装RN的前置环境。

这一步比较复杂，需要参考下方链接。安装过后把项目放在Android Studio跑一下，看能不能跑起来，环境没问题是可以跑起来的

5、启动android虚拟机或链接真机（真机需要开启开发者模式）

6、启动android

react-native run-android

7、打包apk

没试过打包ios，请查官网或百度。
打包apk，参考下方链接。

* 请确保环境配置完成再运行，否则会报错。环境配置参考下方链接。

```

# 链接链接

[搭建开发环境](https://reactnative.cn/docs/environment-setup)

[官方文档](https://reactnative.cn/docs/getting-started/)

[react-navigation 参照](https://blog.csdn.net/u011272795/article/details/80915040)

[react-native-tab-navigation 参照](https://www.jianshu.com/p/e068d017ad4d)

[navigationOptions 参数配置](https://blog.csdn.net/ahou2468/article/details/87625428)

[国内镜像 gradle 包下载](https://mirrors.cloud.tencent.com/gradle/)

[生成 Android 密钥](https://reactnative.cn/docs/signed-apk-android#%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E7%AD%BE%E5%90%8D%E5%AF%86%E9%92%A5)

[打包apk](https://reactnative.cn/docs/signed-apk-android)

# 2020-1-10

tips:这个项目是可以跑起来的。如果跑不起来：

1、请检查前置环境是否安装。

2、node 版本是否过低，不推荐使用版本为 12.14.0 及以上版本的 node（会导致项目跑不起来），推荐使用版本为 12.10.0 的 node。[node 旧版本下载](https://nodejs.org/zh-cn/download/releases/)

3、更改 android=>gradle.properties 里面的密钥
MYAPP_RELEASE_STORE_FILE、
MYAPP_RELEASE_KEY_ALIAS、
MYAPP_RELEASE_STORE_PASSWORD、
MYAPP_RELEASE_KEY_PASSWORD ，
改为你自己的就可以了。[生成密钥](https://reactnative.cn/docs/signed-apk-android#%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E7%AD%BE%E5%90%8D%E5%AF%86%E9%92%A5)

4、本地是否有对应的 gradle 版本包。本项目用的是“gradle-6.3-all”，没有的需要下。[gradle 包国内镜像下载](https://mirrors.cloud.tencent.com/gradle/)

# 2021-06-04

tips：ts 检查

1、运行 yarn tsc 对 TypeScript 文件进行类型检查。
