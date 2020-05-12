import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import RoundedButton from '../buttons/RoundedButton';
//import firebase from '@react-native-firebase/app';
//import database from '@react-native-firebase/database';
export default class Level extends Component {
  // database = firebase.database();
  writeEssentialData = level => {
    //   firebase
    //     .database()
    //     .ref('phone/' + phoneNumber + '/')
    //     .update({
    //       level: 1,
    //     });
  };
  writeEffectiveData = level => {
    // firebase
    //   .database()
    //   .ref('phone/' + phoneNumber + '/')
    //   .update({
    //     level: 2,
    //   });
  };
  writeExpertData = level => {
    // firebase
    //   .database()
    //   .ref('phone/' + phoneNumber + '/')
    //   .update({
    //     level: 3,
    //   });
  };
  render() {
    return (
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}>
          CHOOSE YOUR LEVEL OF COMMUNICATION
        </Text>
        <RoundedButton
          text="Essential"
          textColor="#000000"
          backgroundColor="#ecf0f1"
          //onPress={this.writeEssentialData}
          icon={
            <MaterialIcon name="seed-outline" size={30} style={styles.Icon} />
          }
        />
        <RoundedButton
          text="Effective"
          textColor="#000000"
          backgroundColor="#ecf0f1"
          //onPress={this.writeEffectiveData}
          icon={<Icon name="seedling" size={30} style={styles.Icon} />}
        />
        <RoundedButton
          text="Expert"
          textColor="#000000"
          backgroundColor="#ecf0f1"
          onPress={this.writeExpertData}
          icon={<EntypoIcon name="tree" size={30} style={styles.Icon} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdc3c7',
  },
  welcomeText: {
    fontSize: 27,
    color: '#000000',
    marginBottom: '5%',
    fontFamily: 'notosans_bold',
    textAlign: 'center',
  },
  Icon: {
    color: '#588810',
    position: 'relative',
    left: 60,
    zIndex: 8,
  },
});
