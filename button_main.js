import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';

export default class Button_Main extends React.Component {
  onPress = () => {};

  render() {
    const {text} = this.props;
    return (
      <View
        style={{
          justifyContent: 'center',
          width: '45%',
          marginLeft: '2.5%',
          marginRight: '2.5%',
          paddingBottom: '2%',
        }}>
        <TouchableOpacity onPress={this.onPress}>
          <Image
            source={require('./images/4.jpg')}
            style={{height: 60, width: '100%'}}
          />
          <Text style={styles.loginHeader}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginHeader: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    marginLeft: '20%',
  },
});
