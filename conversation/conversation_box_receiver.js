import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

export default class ConversationBoxReceiver extends React.Component {
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
          alignSelf: 'flex-end',
          elevation: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: '37.5%',
          marginTop: '2%',
          marginRight: '2.5%',
        }}>
        {/* View for Question */}
        <TouchableOpacity onPress={this.onPress}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Icon
              name={this.state.speechstate ? 'volume-2' : 'volume-x'}
              size={40}
              color={this.state.speechstate ? 'green' : 'red'}
            />
            <Text style={{alignSelf: 'center', marginLeft: '3%'}}>
              {this.state.speechstate ? 'Playing-' : 'Stopped-'}
            </Text>
            <Text style={styles.person}>{person}</Text>
          </View>

          <Text style={styles.question}>{text}</Text>
        </TouchableOpacity>
        {/* Display the text stored in TextHolder */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {padding: 3, fontWeight: 'bold'},
  person: {alignSelf: 'center'},
});
