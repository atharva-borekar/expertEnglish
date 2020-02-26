import React, { Component } from "react";
import propTypes from "prop-types";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../style/color/index";

export default class RoundedButton extends Component {
  render() {
    const { text, color, icon, backgroundColor, onPress, TextSize } = this.props;
    return (
      <TouchableHighlight
        style={[{ backgroundColor }, styles.wrapper]}
        onPress={onPress}
      >
        <View style={styles.ButtonTextWrapper}>
          {icon}
          <Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  color: propTypes.string,
  backgroundColor: propTypes.string
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    display: "flex",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 40,
    alignItems: "center"
  },
  ButtonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonText: {
    fontSize: 22,
    width: "100%",
    textAlign: "center",
   
  }
});