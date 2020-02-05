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
import list from '../components/list';
import Icon from 'react-native-vector-icons/Entypo';
import Sample from '../sample';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Icon name={'menu'} size={50} />
        </TouchableOpacity>

        <Sample />
        <Sample />
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
