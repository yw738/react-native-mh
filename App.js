/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Demo from './src/pages/demo1'
import Demo2 from './src/pages/demo2'
import Demo3 from './src/pages/demo3'

export default class App extends Component {
  render() {
    return (
        <Demo3/>
    );
  }
}
