import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import ConversationBoxSender from './conversation_box_sender';
import ConversationBoxReceiver from './conversation_box_receiver';

export default class Conversation extends React.Component {
  render() {
    //All the props must be strings like "Lorem Ipsum"
    return (
      <View style={styles.base}>
        <ScrollView>
          <ConversationBoxSender
            person="abcd"
            text=" Hello Jason, how are you, it's been a long time since we last met?"
          />
          <ConversationBoxReceiver
            person="1234"
            text="Oh, hi Sarah I'm have got a new job now and is going great. How about you?"
          />
          <ConversationBoxSender text="Not too bad." />
          <ConversationBoxReceiver text=" How often do you eat at this cafe?" />
          <ConversationBoxSender text="This is my first time my friends kept telling me the food was great, so tonight I decided to try it. What have you been up to?" />
          <ConversationBoxReceiver text="I have been so busy with my new job that I have not had the time to do much else, but otherwise, me and the family are all fine." />
          <ConversationBoxSender text=" Well, I hope you and your family have a lovely meal." />
          <ConversationBoxReceiver text="Yes, you too!" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#bdc3c7',
    height: '100%',
  },
  convo: {
    marginTop: '3%',
  },
});
