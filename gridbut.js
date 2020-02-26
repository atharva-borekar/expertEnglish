/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fill from './images/fill.jpg';
import spot from './images/spot.png';
import shuffle from './images/shuffle.gif';
import conversation from './images/conversation.jpg';
import button from './images/button.png';
import sentenceimprovement from './images/sentenceimprovement.jpg';

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
        case 'shuffle':
          return shuffle;
        case 'conversation':
          return conversation;
        case 'sentenceimprovement':
          return sentenceimprovement;
        default:
          return button;
      }
    };
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.base}>
          <View style={{alignContent: 'center'}}>
            <Image
              source={this.setImage()}
              style={{
                height: 70,
                width: 120,
                marginTop: -50,
              }}
            />
          </View>
          <View>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                alignSelf: 'center',
                position: 'absolute',
                fontSize: 14,
                paddingLeft: 5,
                paddingRight: 5,
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
    height: 105,
    width: 120,
    backgroundColor: '#e1e2ef',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowColor: '#000000',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
});
