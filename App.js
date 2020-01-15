/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import Speaking from './speaking_js/speaking';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.complete_header}>
        <Speaking />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  complete_header: {flex: 1},
});
