import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Speaking extends React.Component {
  text_state = {TextHolder: 'Hey There Its me'};
  changeText = () => {
    this.setText({TextHolder: 'This is new text'});
  };

  state = {record_status: false};
  getInitialState = () => {
    return {record_status: false};
  };
  onPress = () => {
    this.recordStatusChange();
  };

  recordStatusChange = () => {
    this.state.record_status === false
      ? this.setState({record_status: true})
      : this.setState({record_status: false});
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.question_box}>
          <Text style={styles.question}>{this.text_state.TextHolder}</Text>
        </View>

        <View style={styles.record}>
          <TouchableOpacity style={styles.record_touch} onPress={this.onPress}>
            {
              <Icon
                name={this.state.record_status ? 'mic' : 'mic-off'}
                size={125}
                color={this.state.record_status ? 'green' : '#8b0000'}
                style={styles.record_icon}
              />
            }
          </TouchableOpacity>
          <Text style={styles.record_text}>
            Status: {this.state.record_status ? 'Recording' : 'Not Recording'}
          </Text>
        </View>

        <TouchableOpacity style={styles.submit_button}>
          <Text style={styles.submit_button_text}>Submit</Text>
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
  question_box: {
    width: '95%',
    backgroundColor: '#ede6e9',
    borderRadius: 15,
    marginTop: '10%',
    height: '40%',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 20,
  },
  question: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  record: {marginTop: '12%'},
  record_icon: {marginTop: '20%', alignSelf: 'center'},

  record_text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '2%',
    alignSelf: 'center',
  },
  submit_button: {
    width: '50%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#8b0000',
    marginTop: '15%',
    marginLeft: '25%',
    marginRight: '25%',
  },
  submit_button_text: {
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
});
