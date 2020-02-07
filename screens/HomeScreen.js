import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Sample from '../sample';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Grid from '../grid';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity>
            <Icon name={'menu'} size={50} />
          </TouchableOpacity>
          <Grid />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  categories: {
    marginTop: 100,
  },
});
