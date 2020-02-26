import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import colors from "../style/color/index";

export default class RoundedButton extends Component {
  render() {
    const {text, textColor, icon, backgroundColor, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[{backgroundColor}, styles.wrapper]}
        onPress={onPress}>
        <View style={styles.ButtonTextWrapper}>
          {icon}
          <Text style={[{textColor}, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string,
  backgroundColor: propTypes.string,
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    display: 'flex',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ffffff',
    alignItems: 'center',
    margin: '3%',
    elevation: 10,
  },
  ButtonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: 22,
    width: '100%',
    textAlign: 'center',
  },
});
