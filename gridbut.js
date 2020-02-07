import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import GridButton from './components/gridbutton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class GridBut extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.base}>
          <View style={{alignContent: 'center'}}>
            <Image
              source={require('./images/button.png')}
              style={{height: 70, width: 110, marginTop: -50}}
            />
          </View>
          <View>
            <Text
              style={{alignSelf: 'center', position: 'absolute', fontSize: 12}}>
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
    height: 110,
    width: 110,
    backgroundColor: '#ffffff',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1,
    shadowColor: '#000000',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
  },
});
