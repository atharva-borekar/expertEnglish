/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import ListItem from './list_item';

export default class List extends React.Component {
  render() {
    const {list_heading} = this.props; //heading of the list, use from props
    return (
      <View style={styles.back}>
        <View style={{width: '95%', alignSelf: 'center', marginTop: '2%'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{list_heading}</Text>
        </View>
        <ScrollView>
          {/* put a list of item in here, each item with 3 parameters(image,description,heading) 
              image= string with value of {fill,spot,conversation,sentenceimprovement,activepassive,verbadverb,directindirect,shuffle}
              description= string with value of content description for item
              heading= string with value of heading for item
          */}
          <ListItem
            image="fill"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Fill in the Blanks"
          />
          <ListItem
            image="spot"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Spot the error
              "
          />
          <ListItem
            image="conversation"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Conversation"
          />
          <ListItem
            image="sentenceimprovement"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Sentence Improvement"
          />
          <ListItem
            image="activepassive"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Active and Passive Voice"
          />
          <ListItem
            image="verbadverb"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Verbs and Adverbs"
          />
          <ListItem
            image="directindirect"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Direct and Indirect Speech"
          />
          <ListItem
            image="shuffle"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
            heading="Shuffled"
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  back: {
    backgroundColor: '#ede6e3',
    height: '100%',
  },
});
