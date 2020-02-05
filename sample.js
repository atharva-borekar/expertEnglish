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
import GridButton from './components/gridbutton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Sample extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.heading}>
          <Text style={styles.headtext}>Heading</Text>
        </View>
        <View style={styles.list}>
          <ScrollView horizontal={true} style={{marginLeft: 30, elevation: -5}}>
            <GridButton GridButtonText="Reading" />
            <GridButton GridButtonText="Speaking" />
            <GridButton GridButtonText="Listening" />
            <GridButton GridButtonText="Writing" />
            <GridButton GridButtonText="ABCD" />
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  base: {backgroundColor: '#515751', paddingBottom: 10},
  heading: {elevation: 20, backgroundColor: '#596869'},
  headtext: {
    fontSize: 23,
    color: '#ffffff',
    marginLeft: '5%',
    marginTop: 10,
  },
  list: {
    backgroundColor: '#596869',
    height: 100,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: 'center',
  },
});
