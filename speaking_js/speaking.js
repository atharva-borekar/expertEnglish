import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Switch, Button} from 'native-base';
import {Icon} from 'react-native-elements';

export default class Speaking extends React.Component {
  state = {TextHolder: 'Hey There Its me'};

  changeText = () => {
    this.setText({TextHolder: 'This is new text'});
  };

  render() {
    return (
      <>
        <View style={styles.base}>
          <View style={styles.question_box}>
            <Text style={styles.question}>{this.state.TextHolder}</Text>
          </View>

          <View style={styles.record}>
            <Icon
              name={'ios-mic'}
              type="ionicon"
              size={28}
              style={styles.record_icon}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#6d7275',
    height: '100%',
  },
  question_box: {
    width: '90%',
    backgroundColor: '#c7d6d5',
    marginLeft: '5%',
    borderRadius: 15,
    marginTop: '25%',
    height: '30%',
    justifyContent: 'center',
  },
  question: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  record_icon: {marginTop: '25%'},
  button: {
    width: '50%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#c20114',
    marginTop: '50%',
    marginLeft: '25%',
    marginRight: '25%',
  },
  button_text: {
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  justify: true,
});
