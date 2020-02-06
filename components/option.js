import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Option extends React.Component {
  state = {color: '#8d201f'};

  setColor = () => {
    //Function to change color onPress
    const x = this.props.COP;
    switch (x) {
      case 'option1':
        this.state.color1 = '#00a86b';
        break;
      case 'option2':
        this.state.color2 = '#00a86b';
        break;
      case 'option3':
        this.state.color3 = '#00a86b';
        break;
      case 'option4':
        this.state.color4 = '#00a86b';
        break;
    }
  };

  render() {
    const {
      RadioButtonState,
      SelectedButtonState,
      IconOn,
      IconOff,
      OP,
      COP,
    } = this.props;

    return (
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() =>
          // onPress change the selected_option to current_option and the color of all the labels
          this.setState({
            radioButton: {RadioButtonState},
            selected_option: {SelectedButtonState},
          }) || this.setColor()
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
        <Text style={styles.checkbox_text}>{this.text_state.ans1}</Text>
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
    marginTop: '2%',
    alignContent: 'center',
  },
  checkbox_icon: {alignSelf: 'flex-start'},
  checkbox_text: {alignSelf: 'flex-start', marginRight: '15%'},
});
