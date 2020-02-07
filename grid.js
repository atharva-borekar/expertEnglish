import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GridBut from './gridbut';
import {Row} from 'native-base';

export default class Grid extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <ScrollView>
          <View style={{backgroundColor: '#8E4162'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              EXPERT ENGLISH ACADEMY
            </Text>
          </View>

          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F2F4F3',
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
                Learn Something New!
              </Text>
            </View>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
                marginTop: 5,
              }}>
              <ScrollView horizontal={true} style={{elevation: -10}}>
                <GridBut text="Active and Passive Voice" />
                <GridBut text="Antonyms" />
                <GridBut text="Determiners" />
                <GridBut text="Figure Of Speech" />
              </ScrollView>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              width: '60%',
              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '37%',
            }}>
            <View style={styles.heading}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
                  color: '#ffffff',
                }}>
                Practice!!
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
              }}>
              <ScrollView horizontal={true} style={{elevation: -10}}>
                <GridBut text="Fill in the Blanks" />
                <GridBut text="Idioms and Phrases" />
                <GridBut text="Noun Clauses" />
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              width: '60%',
              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '3%',
            }}>
            <View style={styles.heading}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
                  color: '#ffffff',
                }}>
                Try Something Fun!
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
              }}>
              <ScrollView horizontal={true} style={{elevation: -10}}>
                <GridBut text="Proverb" />
                <GridBut text="Punctuation Marks" />
                <GridBut text="Sentence Improvement" />
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: 20,
              marginLeft: '37%',
              width: '60%',
            }}>
            <View style={styles.heading}>
              <Text
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
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
              }}>
              <ScrollView horizontal={true} style={{elevation: -10}}>
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
  },
  heading: {
    backgroundColor: '#3C3C3C',
    height: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
  },
});
