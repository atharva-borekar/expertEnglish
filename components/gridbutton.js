import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class GridButton extends React.Component {
  render() {
    const {GridButtonText} = this.props;
    return (
      <TouchableOpacity>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: '#f5f9e9',
            height: 80,
            width: 150,
            marginTop: 10,
            borderRadius: 40,
            marginLeft: 10,
            marginBottom: 10,
            justifyContent: 'center',
            elevation: -20,
          }}>
          <Text style={{alignSelf: 'center', elevation: 20}}>
            {GridButtonText}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
