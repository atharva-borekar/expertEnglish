import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, setCustomText } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
class InputField extends Component {
  
  render() {
    const {
        labelText,
        labelTextSize,
        labelColor,
        textColor,
        borderBottomColor,
        inputType,
        customStyle,
      } = this.props;
      const color = labelColor || Colors.white;
      const fontSize = labelTextSize || 14;
      const inputColor = textColor || Colors.white;
      const borderBottom = borderBottomColor || "transparent";
      return (
        <View style={[customStyle, styles.wrapper]}>
          <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
          <TextInput
            {...this.props}
            autoCorrect={false}
            style={[
              { color: inputColor, borderBottomColor: borderBottom },
              styles.inputField
            ]}
            maxLength={10}
            keyboardType='numeric' 
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    wrapper: {
      display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputField: {
      borderBottomWidth: 1,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft:10
    }
  });
  export default InputField;