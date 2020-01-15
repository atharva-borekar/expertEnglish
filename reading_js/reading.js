import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class Reading extends React.Component {
  text_state = {TextHolder: 'Hey There Its me'};
  changeText = () => {
    this.setText({TextHolder: 'This is new text'});
  };

  state = {checked1: false, checked2: false, checked3: false, checked4: false};

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.question_box}>
          <Text style={styles.question}>{this.text_state.TextHolder}</Text>
        </View>
        <View style={styles.mcq_options}>
          <CheckBox
            title="Option 1"
            checked={this.state.checked1}
            onPress={() => this.setState({checked1: !this.state.checked1})}
          />
          <CheckBox
            title="Option 2"
            checked={this.state.checked2}
            onPress={() => this.setState({checked2: !this.state.checked2})}
          />
          <CheckBox
            title="Option 3"
            checked={this.state.checked3}
            onPress={() => this.setState({checked3: !this.state.checked3})}
          />
          <CheckBox
            title="Option 4"
            checked={this.state.checked4}
            onPress={() => this.setState({checked4: !this.state.checked4})}
          />
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
    backgroundColor: '#5bc3eb',
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
});
