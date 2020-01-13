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

export default class Skill_main extends React.Component {
  render() {
    return (
      <View style={styles.skill_main}>
        <Text style={styles.skill_main_text}>Speaking Skills</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  skill_main: {
    width: '100%',
    height: '9%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ede6e3',
  },
  skill_main_text: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
