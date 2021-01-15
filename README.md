
# react-native-mh

 react-native   v 0.59.8
 
 git clone https://github.com/yw738/react-native-mh.git
 
 npm install
  
react-native run-android 
 
请确保环境配置完成再运行，否则会报错。

参照官方文档：

https://reactnative.cn/docs/getting-started/

react-navigation 参照：

https://blog.csdn.net/u011272795/article/details/80915040 

react-native-tab-navigation 参照：

https://www.jianshu.com/p/e068d017ad4d

# 2020-1-10

tips:这个项目是可以跑起来的。如果跑不起来：

1、请检查环境是否安装。

2、node版本是否过低，不推荐使用版本为12.14.0的node（跑不起来），推荐使用版本为12.10.0的node。

3、更改android=>gradle.properties 里面的密钥 MYAPP_RELEASE_STORE_FILE、MYAPP_RELEASE_KEY_ALIAS、MYAPP_RELEASE_STORE_PASSWORD、MYAPP_RELEASE_KEY_PASSWORD ，改为你自己的就可以了。（官网查一下，生成密钥的方式就OK了）;
