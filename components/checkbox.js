import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Checkbox_comp extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.checkbox}>
        <Icon
          name="numeric-1-box-outline"
          size={50}
          style={styles.checkbox_icon}
        />
        <Text style={styles.checkbox_text}>Option 1</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#efefe6',
    elevation: 10,
    marginLeft: '5%',
    borderRadius: 12,
  },
  checkbox_icon: {alignSelf: 'flex-start'},
  checkbox_text: {},
});
