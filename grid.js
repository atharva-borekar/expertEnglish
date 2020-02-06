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
            style={{
              backgroundColor: '#F2F4F3',
              width: '60%',
              paddingTop: 20,
            }}>
            <View style={styles.heading}>
              <Text
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
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
              }}>
              <ScrollView horizontal={true} style={{elevation: -10}}>
                <GridBut text2="Active and Passive Voice" text1="A/P" />
                <GridBut text2="Antonyms" text1="A" />
                <GridBut text2="Determiners" text1="D" />
                <GridBut text2="Figure Of Speech" text1="FoS" />
              </ScrollView>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              width: '60%',
              paddingTop: 20,
              marginLeft: '40%',
            }}>
            <View style={styles.heading}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
                  color: '#ffffff',
                }}>
                Practice makes one perfect!
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
              }}>
              <ScrollView horizontal={true} style={{elevation: -10}}>
                <GridBut text2="Fill in the Blanks" text1="F" />
                <GridBut text2="Idioms and Phrases" text1="I/P" />
                <GridBut text2="Noun Clauses" text1="NC" />
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              width: '60%',
              paddingTop: 20,
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
                <GridBut text2="Proverb" text1="P" />
                <GridBut text2="Punctuation Marks" text1="PM" />
                <GridBut text2="Sentence Improvement" text1="SI" />
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F2F4F3',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              width: '60%',
              paddingTop: 20,
              marginLeft: '40%',
            }}>
            <View style={styles.heading}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 30,
                  color: '#ffffff',
                }}>
                Recordings
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-between',
              }}>
              <ScrollView horizontal={true} style={{elevation: -10}}>
                <GridBut text2="Spot the Error" text1="STE" />
                <GridBut text2="Synonyms" text1="S" />
                <GridBut text2="Verb and Adverb" text1="VA" />
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
    backgroundColor: '#EBFCFB',
  },
  heading: {
    backgroundColor: '#3C3C3C',
    height: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
  },
});
