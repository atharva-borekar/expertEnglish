import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Reading extends React.Component {
  text_state = {TextHolder: 'Hey There Its me'};
  changeText = () => {
    this.setText({TextHolder: 'This is new text'});
  };

  state = {radioButton: null, selected_option: null};

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.question_box}>
          <Text style={styles.question}>{this.text_state.TextHolder}</Text>
        </View>
        <View style={styles.mcq_options}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() =>
              this.setState({
                radioButton: 'option1',
                selected_option: 'option1',
              })
            }>
            <Icon
              name={
                this.state.radioButton === 'option1'
                  ? 'alpha-a-circle'
                  : 'alpha-a-circle-outline'
              }
              size={50}
              style={styles.checkbox_icon}
            />
            <Text style={styles.checkbox_text}>Option 1</Text>
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
              size={50}
              style={styles.checkbox_icon}
            />
            <Text style={styles.checkbox_text}>Option 2</Text>
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
              size={50}
              style={styles.checkbox_icon}
            />
            <Text style={styles.checkbox_text}>Option 3</Text>
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
              size={50}
              style={styles.checkbox_icon}
            />
            <Text style={styles.checkbox_text}>Option 4</Text>
          </TouchableOpacity>

          <Text style={styles.selected_option_text}>
            Option Selected: {this.state.selected_option}
          </Text>

          <TouchableOpacity style={styles.submit_button}>
            <Text style={styles.submit_button_text}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  mcq_options: {},
  scroll: {
    height: '100%',
  },
  checkbox: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#efefe6',
    elevation: 10,
    marginLeft: '5%',
    borderRadius: 12,
    marginTop: '2%',
  },
  checkbox_icon: {alignSelf: 'flex-start'},
  checkbox_text: {},
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
  },
  submit_button_text: {
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
});
