import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

export default class Reading1 extends React.Component {
  state = {
    //States for mcq functioning
    radioButton: null, //State of the Button
    selected_option: null, //State of the Selected Button
    color1: '#8d201f',
    color2: '#8d201f',
    color3: '#8d201f',
    color4: '#8d201f',
  };
  // After clicking on submit click any option to know answer
  render() {
    this.setColor = () => {
      //Function to change color onPress
      const x = correct_option; //correct option must be op1 || op2 || op3 || op4
      switch (x) {
        case 'op1':
          this.state.color1 = '#00a86b';
          break;
        case 'op2':
          this.state.color2 = '#00a86b';
          break;
        case 'op3':
          this.state.color3 = '#00a86b';
          break;
        case 'op4':
          this.state.color4 = '#00a86b';
          break;
      }
    };
    const {question, op1, op2, op3, op4, correct_option} = this.props;
    //All the props must be strings like "Lorem Ipsum"
    return (
      <View style={styles.base}>
        <View style={styles.question_box}>
          {/* View for Question */}
          <ScrollView>
            {/* Display the text stored in TextHolder */}
            <Text style={styles.question}>{question}</Text>
          </ScrollView>
        </View>
        <ScrollView>
          <View style={styles.mcq_options}>
            {/* View for displaying mcq options */}
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() =>
                // onPress change the selected_option to current_option and the color of all the labels
                this.setState({
                  radioButton: 'option1',
                  selected_option: 'option1',
                })
              }>
              <Icon
                name={
                  //toggle icon according to the state(pressed or not pressed)
                  this.state.radioButton === 'option1'
                    ? 'alpha-a-circle'
                    : 'alpha-a-circle-outline'
                }
                color={this.state.color1}
                size={50}
                style={styles.checkbox_icon}
              />
              {/* Display the text for the option */}
              <Text style={styles.checkbox_text}>{op1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() =>
                this.setState({
                  radioButton: 'option2',
                  selected_option: 'option2',
                })
              }>
              <Icon
                name={
                  this.state.radioButton === 'option2'
                    ? 'alpha-b-circle'
                    : 'alpha-b-circle-outline'
                }
                color={this.state.color2}
                size={50}
                style={styles.checkbox_icon}
              />
              <Text style={styles.checkbox_text}>{op2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() =>
                this.setState({
                  radioButton: 'option3',
                  selected_option: 'option3',
                })
              }>
              <Icon
                name={
                  this.state.radioButton === 'option3'
                    ? 'alpha-c-circle'
                    : 'alpha-c-circle-outline'
                }
                color={this.state.color3}
                size={50}
                style={styles.checkbox_icon}
              />
              <Text style={styles.checkbox_text}>{op3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() =>
                this.setState({
                  radioButton: 'option4',
                  selected_option: 'option4',
                })
              }>
              <Icon
                name={
                  this.state.radioButton === 'option4'
                    ? 'alpha-d-circle'
                    : 'alpha-d-circle-outline'
                }
                color={this.state.color4}
                size={50}
                style={styles.checkbox_icon}
              />
              <Text style={styles.checkbox_text}>{op4}</Text>
            </TouchableOpacity>

            <Text style={styles.selected_option_text}>
              Option Selected: {this.state.selected_option}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.submit_button} onPress={this.setColor}>
          <Text style={styles.submit_button_text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#bdc3c7',
    height: '100%',
  },
  question_box: {
    width: '95%',
    backgroundColor: '#ecf0f1',
    borderRadius: 15,
    marginTop: '10%',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 20,
    height: '25%',
  },
  question: {
    justifyContent: 'center',
    fontSize: 14,
    margin: 20,
  },
  mcq_options: {},
  scroll: {
    height: '100%',
  },
  checkbox: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#ffffff',
    elevation: 10,
    marginLeft: '2.5%',
    borderRadius: 12,
    marginTop: '2%',
    alignContent: 'center',
  },
  checkbox_icon: {alignSelf: 'flex-start'},
  checkbox_text: {alignSelf: 'flex-start', marginRight: '15%'},
  selected_option_text: {
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
