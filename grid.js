import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import GridBut from './gridbut';

export default class Grid extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={{backgroundColor: '#8E4162'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#ffffff'}}>
            EXPERT ENGLISH ACADEMY
          </Text>
        </View>
        <ScrollView>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F2F4F3',
              width: '94%',
              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '3%',
            }}>
            <View style={styles.heading}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
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
              <ScrollView horizontal={true}>
                <GridBut text="Active and Passive Voice" />
                <GridBut text="Ver and Adverbs" />
                <GridBut text="Direct and Indirect Speech" />
                <GridBut text="" />
              </ScrollView>
            </View>
          </View>

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              width: '60%',
              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '37%',
            }}>
            <View style={styles.heading}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
                  color: '#ffffff',
                }}>
                Practice
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
                <GridBut text="Fill in the Blanks" />
                <GridBut text="Spot The Error" />
                <GridBut text="" />
              </ScrollView>
            </View>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              width: '60%',
              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '3%',
            }}>
            <View style={styles.heading}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
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
                <GridBut text="Shuffling of Paragraphs" />
                <GridBut text="Shuffling of Sentence" />
              </ScrollView>
            </View>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,

              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '37%',
              width: '60%',
            }}>
            <View style={styles.heading}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
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
                <GridBut text="Spot the Error" />
                <GridBut text="Synonyms" />
                <GridBut text="Verb and Adverb" />
              </ScrollView>
            </View>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '3%',
              width: '94%',
            }}>
            <View style={styles.heading}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
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
                <GridBut text="Spot the Error" />
                <GridBut text="Synonyms" />
                <GridBut text="Verb and Adverb" />
              </ScrollView>
            </View>
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
  },
});
