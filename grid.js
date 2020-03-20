import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import GridBut from './gridbut';

export default class Grid extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <ScrollView>
          <View style={styles.heading}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={styles.head_text}>
              Grammar
            </Text>
          </View>
          <View style={styles.grammar}>
            <GridBut text="Active and Passive Voice" image="activepassive" />
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: 'black',
                height: '85%',
                alignSelf: 'center',
              }}
            />
            <GridBut text="Verbs and Adverbs" image="verbadverb" />
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: 'black',
                height: '85%',
                alignSelf: 'center',
              }}
            />
            <GridBut text="Direct and Indirect Speech" image="directindirect" />
          </View>
          <View style={styles.heading1}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={styles.head_text}>
              Exercises
            </Text>
          </View>
          <View style={styles.grammar}>
            <GridBut text="Fill in the Blanks" image="fill" />
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: 'black',
                height: '85%',
                alignSelf: 'center',
              }}
            />
            <GridBut text="Spot The Error" image="spot" />
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: 'black',
                height: '85%',
                alignSelf: 'center',
              }}
            />
            <GridBut text="Sentence Improvement" image="sentenceimprovement" />
          </View>
          <View style={styles.heading}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={styles.head_text}>
              Shuffled World
            </Text>
          </View>
          <View style={styles.grammar}>
            <GridBut text="Shuffle Sentence" image="shuffle" />

            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: 'black',
                height: '85%',
                alignSelf: 'center',
                marginLeft: '10%',
                marginRight: '10%',
              }}
            />

            <GridBut text="Shuffle Paragrah" image="shuffle" />
          </View>
          <View style={styles.heading}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={styles.head_text}>
              Conversations
            </Text>
          </View>
          <View style={styles.grammar || {marginBottom: '3%'}}>
            <ScrollView horizontal={true}>
              <GridBut text="Conversation 1" image="conversation" />
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: '85%',
                  alignSelf: 'center',
                }}
              />
              <GridBut text="Conversation 1" image="conversation" />
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: '85%',
                  alignSelf: 'center',
                }}
              />
              <GridBut text="Conversation 1" image="conversation" />
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: '85%',
                  alignSelf: 'center',
                }}
              />
              <GridBut text="Conversation 1" image="conversation" />
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: 'black',
                  height: '85%',
                  alignSelf: 'center',
                }}
              />
              <GridBut text="Conversation 1" image="conversation" />
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
    marginTop: '3%',
  },
  heading1: {marginTop: '1%'},
  grammar: {
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#ffffff',
    marginTop: 4,
    flex: 1,
    flexDirection: 'row',
    elevation: 20,
    justifyContent: 'center',
  },
  head_text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '3%',
    color: '#ffffff',
  },
});
