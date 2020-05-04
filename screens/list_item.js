/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fill from '../images/fill.png';
import spot from '../images/spot.png';
import conversation from '../images/conversation.png';
import sentenceimprovement from '../images/sentenceimprovement.jpg';
import activepassive from '../images/activepassive.png';
import verbadverb from '../images/verbadverb.jpg';
import directindirect from '../images/directindirect.png';
import shufflesentence from '../images/shufflesentence.png';

export default class ListItem extends React.Component {
  onPress = () => {}; //edit onPress here to give action

  render() {
    const {heading, description, image} = this.props;

    this.setImage = () => {
      const x = image;
      switch (x) {
        case 'fill':
          return fill;
        case 'spot':
          return spot;
        case 'conversation':
          return conversation;
        case 'sentenceimprovement':
          return sentenceimprovement;
        case 'activepassive':
          return activepassive;
        case 'verbadverb':
          return verbadverb;
        case 'directindirect':
          return directindirect;
        case 'shuffle':
          return shufflesentence;
      }
    };
    return (
      <TouchableOpacity style={styles.base} onPress={this.onPress}>
        <View style={styles.container}>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={this.setImage()}
              style={{
                resizeMode: 'contain',
                marginTop: '5%',
                marginBottom: '5%',
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              borderLeftWidth: 1,
              borderLeftColor: 'black',
              height: '85%',
              alignSelf: 'center',
              marginLeft: '1%',
            }}
          />
          <View
            style={{
              width: '70%',
              marginTop: '1%',
              flexDirection: 'column',
              marginLeft: '1%',
            }}>
            <View style={styles.list_item_head}>
              <Text style={styles.list_item_head_text}>{heading}</Text>
            </View>
            <View style={styles.list_item_desc}>
              <Text style={styles.list_item_desc_text}>{description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  base: {
    width: '95%',
    height: 'auto',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: '2.5%',
    borderRadius: 5,
  },
  container: {flexDirection: 'row'},
  list_item_head: {
    alignSelf: 'flex-start',
  },
  list_item_head_text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  list_item_desc: {
    alignSelf: 'flex-start',
  },
  list_item_desc_text: {
    fontSize: Dimensions.get('window').width * 0.03,
    textAlign: 'justify',
  },
});
