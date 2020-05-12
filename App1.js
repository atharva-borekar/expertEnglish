import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import ListItem from './screens/list_item';

export default class App1 extends React.Component {
  render() {
    const {question, op1, op2, op3, op4, correct_option} = this.props;
    //All the props must be strings like "Lorem Ipsum"
    return (
      <ListItem heading="heading" description="description" image="fill" />
    );
  }
}

const styles = StyleSheet.create({});
