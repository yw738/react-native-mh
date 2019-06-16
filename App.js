
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// import Home from './src/pages/home'
import Router from './src/Router'
export default class App extends Component {
  render() {
    return (
        <Router/>
    );
  }
}

//
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
//
// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Home Screen</Text>
//                 <Button
//                     title="Go to Details"
//                     onPress={() => {
//             this.props.navigation.push('Details')
//           }}
//                 />
//             </View>
//         );
//     }
// }
//
// class DetailsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Details Screen</Text>
//             </View>
//         );
//     }
// }
//
// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen,
//     },
//     Details: {
//         screen: DetailsScreen,
//     },
// }, {
//     initialRouteName: 'Home',
// });
//
// export default createAppContainer(AppNavigator);
