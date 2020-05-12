import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import Reading1 from './reading_js/reading1';

export default class App1 extends React.Component {
  render() {
    const {question, op1, op2, op3, op4, correct_option} = this.props;
    //All the props must be strings like "Lorem Ipsum"
    return (
      <Reading1
        question="ABCD select the correct option"
        op1="asdasda asd masd am damdsdasdasdasdad"
        op2="b as dsam da sd,as dmasmd masd bbb"
        op3="casdasdasd asdasd as,d ,as dasdccc"
        op4="ddasdadasdasdadadasdadaddd"
        correct_option="op3"
      />
    );
  }
}

const styles = StyleSheet.create({});
