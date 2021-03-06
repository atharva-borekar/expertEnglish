import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class ConversationBoxSender extends React.Component {
  state = {name: 'volume-2', speechstate: false};

  onPress = () => {
    this.recordStatusChange();
  };

  recordStatusChange = () => {
    //Change the state of speech
    this.state.speechstate === false
      ? this.setState({speechstate: true})
      : this.setState({speechstate: false});
  };
  render() {
    const {person, text} = this.props;

    //All the props must be strings like "Lorem Ipsum"
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          maxWidth: '70%',
          backgroundColor: '#ecf0f1',
          borderRadius: 15,
          marginTop: '2%',
          alignSelf: 'flex-start',
          elevation: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: '2%',
        }}>
        {/* View for Question */}
        {/* Display the text stored in TextHolder */}

        <TouchableOpacity onPress={this.onPress}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Icon
              name={this.state.speechstate ? 'volume-2' : 'volume-x'}
              size={40}
              color={this.state.speechstate ? 'green' : 'red'}
            />
            <Text style={{alignSelf: 'center', marginLeft: '3%'}}>
              {this.state.speechstate ? 'Playing' : 'Stopped'}
            </Text>
            <View
              style={{flex: 1, flexDirection: 'row-reverse', marginLeft: '5%'}}>
              <Text style={styles.person}>{person}</Text>
            </View>
          </View>

          <Text style={styles.question}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {padding: 3, fontWeight: 'bold'},
  person: {alignSelf: 'center'},
});
