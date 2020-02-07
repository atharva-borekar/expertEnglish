import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

export default class Reading extends React.Component {
  render() {
    const {flash_text} = this.props;
    return (
      <View style={styles.base}>
        <View style={styles.instruction}>
          <Text style={styles.ins_text}>INSTRUCTIONS</Text>
        </View>
        <View style={styles.card}>
          <ScrollView>
            <Text style={{padding: '5%'}}>{flash_text}</Text>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.submit_button}>
          <Text style={styles.submit_button_text}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ede6e3',
    height: '100%',
  },
  instruction: {marginTop: '5%'},
  ins_text: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '95%',
    backgroundColor: '#ede6e9',
    borderRadius: 15,
    marginTop: '10%',
    height: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 20,
  },
  submit_button: {
    width: '50%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#8b0000',
    marginTop: '8%',
    marginLeft: '25%',
    marginRight: '25%',
    marginBottom: '3%',
  },
  submit_button_text: {
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
});
