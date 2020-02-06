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
    const {text1, text2, colour} = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.base}>
          <View style={styles.buttonbase}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('./images/button.png')}
            />
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#ffffff',
              }}>
              {text2}
            </Text>
            {/* <Text
              style={{
                alignSelf: 'center',
                color: '#ffffff',
                fontWeight: 'bold',
                margin: 5,
                fontSize: 30,
              }}>
              {text1}
            </Text> */}
          </View>
          {/* <View style={{width: 110, justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
              {text2}
            </Text>
          </View> */}
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  base: {padding: 5},
  buttonbase: {
    height: 110,
    width: 110,
    borderRadius: 25,
    justifyContent: 'center',
  },
});
