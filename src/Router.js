import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from "./pages/home";
import main from "./pages/main";
import HomeDetail from "./pages/homeDetails/home_details";
// createStackNavigator API
/*配置路由 与 vue-router */
// route configs对象是从路由名称到路由配置的映射，它告诉导航器为该路由提供什么。
const Rooter = createStackNavigator({
    Home: {
        screen: Home,
        // `screen` 是一个React组件，它将成为屏幕的主要内容.
        // 可选: 在Web应用程序中深度链接或使用react-navigation时，将使用以下路径：
        // path：'people /：name'，
        // 动作和路线参数从路径中提取。
        // 可选: 覆盖屏幕的`navigationOptions`
        // navigationOptions: ({ navigation }) => ({
        //     title: `${navigation.state.params.name}'s Profile'`,
        // }),
        headerTransparent: true
    }, //路由
    main: {
        screen: main
    },
    HomeDetail: {
        screen: HomeDetail
    },
}, {
    initialRouteName: 'main',
});
// StackNavigatorConfig
// 路由器的选项：
// initialRouteName - 设置堆栈的默认屏幕。必须匹配路径配置中的一个键。//重定向
// initialRouteParams - 初始路线的参数
// initialRouteKey - 初始路由的可选标识符
// navigationOptions - 用于屏幕的默认导航选项
// paths - 路径配置中设置的路径的覆盖映射

// onTransitionStart - 卡转换动画即将开始时要调用的函数。
// onTransitionEnd - 卡过渡动画完成后要调用的函数。

export default createAppContainer(Rooter);