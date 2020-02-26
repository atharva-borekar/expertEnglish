import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import GridBut from './gridbut';
import Button_Main from './button_main';
export default class Grid extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <ScrollView>
          <View style={styles.heading}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: '3%',
                color: '#ffffff',
              }}>
              Grammar
            </Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'space-between',
              marginTop: 5,
              marginBottom: 5,
            }}>
            <Button_Main text="Active and Passive Voice" />
            <Button_Main text="Verb and Adverbs" />
            <Button_Main text="Direct Indirect Speech" />
          </View>

          <View style={styles.heading1}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: '3%',
                color: '#000000',
              }}>
              Exercise
            </Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'space-between',
              marginTop: 5,
              marginBottom: 5,
              marginLeft: '0%',
            }}>
            <GridBut text="Fill in the Blanks" image="fill" />
            <GridBut text="Spot The Error" image="spot" />
            <GridBut text="Sentence Improvement" image="sentenceimprovement" />
          </View>

          <View style={styles.heading}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: '3%',
                color: '#ffffff',
              }}>
              Shuffled World
            </Text>
          </View>

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'space-between',
              marginTop: 5,
              marginBottom: 5,
            }}>
            <ScrollView horizontal={true}>
              <GridBut text="Shuffling of Paragraphs" image="shuffle" />
              <GridBut text="Shuffling of Sentence" image="shuffle" />
            </ScrollView>
          </View>

          <View style={styles.heading}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: '3%',
                color: '#ffffff',
              }}>
              Conversations
            </Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'space-between',
              marginTop: 5,
              marginBottom: 5,
            }}>
            <ScrollView horizontal={true}>
              <GridBut text="Conversation 1" image="conversation" />
              <GridBut text="Conversation 2" image="conversation" />
              <GridBut text="Conversation 3" image="conversation" />
              <GridBut text="Conversation 4" image="conversation" />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ede6e3',
    paddingBottom: '3%',
  },
  heading: {
    backgroundColor: '#3C3C3C',
    height: 40,
    justifyContent: 'center',
    marginTop: '3%',
  },
  heading1: {marginTop: '1%'},
});
