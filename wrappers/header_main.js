import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export default class header_main extends React.Component {
  render() {
    return (
      <View style={styles.header_main}>
        <Text style={styles.header_main_text}>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_main: {
    width: '100%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f06449',
  },
  header_main_text: {alignItems: 'center'},
});
