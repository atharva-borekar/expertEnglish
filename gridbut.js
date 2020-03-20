/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fill from './images/fill.png';
import spot from './images/spot.png';
import conversation from './images/conversation.png';
import button from './images/button.png';
import sentenceimprovement from './images/sentenceimprovement.jpg';
import activepassive from './images/activepassive.png';
import verbadverb from './images/verbadverb.jpg';
import directindirect from './images/directindirect.png';
import shufflesentence from './images/shufflesentence.png';

export default class GridBut extends React.Component {
  onPress = () => {};

  render() {
    const {text, image} = this.props;

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
        default:
          return button;
      }
    };
    return (
      <TouchableOpacity onPress={this.onPress} style={{marginRight: 5}}>
        <View style={styles.base}>
          <View style={{alignContent: 'center', justifyContent: 'center'}}>
            <Image
              source={this.setImage()}
              style={{
                height: 80,
                width: 80,
                marginTop: -50,
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{alignContent: 'center'}}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                position: 'absolute',
                fontSize: 12,
                alignSelf: 'center',
                color: '#000000',
                fontWeight: 'bold',
              }}>
              {text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  base: {
    height: 125,
    width: 110,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 12,
    marginTop: 20,
    borderRadius: 3,
  },
});
