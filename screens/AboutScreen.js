import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://expertenglish.co.in'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
