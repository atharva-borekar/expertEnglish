import React, { Component } from "react";
import {View, StyleSheet, TouchableHighlight} from "react-native"
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../style/color/index"


export default class NextArrowButton extends Component {
  render() {
    const {  onPress } = this.props;
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          onPress={onPress}
          style={[{ opacity: 0.6 }, styles.button]} 
        > 
          <Icon
            name="angle-right"
            color={colors.black}
            size={32}
            style={styles.icon}
          />  
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
 
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
    right: 20
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.grey
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});