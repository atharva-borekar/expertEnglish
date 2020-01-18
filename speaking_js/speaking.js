import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Speaking extends React.Component {
  text_state = {TextHolder: 'Hey There Its me'}; //Variable to hold the scenario question
  changeText = () => {
    this.setText({TextHolder: 'This is new text'}); //Function to change the text in the scenario
  };

  state = {record_status: false}; //State to keep track of recording or not

  onPress = () => {
    //Over-ridden onPress function to change record status
    this.recordStatusChange();
  };

  recordStatusChange = () => {
    //Change the state of recording
    this.state.record_status === false //Set recording = true if previous state is false
      ? this.setState({record_status: true})
      : this.setState({record_status: false});
  };

  render() {
    return (
      <View style={styles.base}>
        {/* View for scenario question */}
        <View style={styles.question_box}>
          <Text style={styles.question}>{this.text_state.TextHolder}</Text>
        </View>
        {/* View for record button */}
        <View style={styles.record}>
          <TouchableOpacity style={styles.record_touch} onPress={this.onPress}>
            {
              <Icon
                // Change icon based on record_status
                name={this.state.record_status ? 'mic' : 'mic-off'}
                size={125}
                // Change color of icon
                color={this.state.record_status ? 'green' : '#8b0000'}
                style={styles.record_icon}
              />
            }
          </TouchableOpacity>
          {/* Display recoding status(Recording or Not Recording) */}
          <Text style={styles.record_text}>
            {/* check record_status and display accordingly */}
            Status: {this.state.record_status ? 'Recording' : 'Not Recording'}
          </Text>
          {/* View for submit button */}
        </View>
        {/* Touchable component for submit button */}
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
