import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  ImageBackground,
} from 'react-native';

export default class Splash extends Component {
  //check if component has been mounted on device
  componentDidMount() {
    // setTimeout(() => {
    //   AsyncStorage.getItem('login', (err, result) => {
    //     console.log(result);
    //     if (result == 'true') {
    //       this.props.navigation.navigate('App');
    //     } else {
    //       this.props.navigation.navigate('Auth');
    //     }
    //   });
    // }, 2 * 1000);
    //if mounted then delay for 2 seconds to display next screen
  }
  render() {
    return (
      <ImageBackground
        source={require('../images/splash-background.jpg')}
        style={{flex: 1}}>
        <View style={{marginTop: '50%'}}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../images/Logo.jpg')}
          />

          <Text style={styles.loginHeader}>Elevating Skills And</Text>
          <Text style={styles.loginHeader1}>Empowering People!</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  loginHeader: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '10%',
    fontWeight: 'bold',
  },
  loginHeader1: {
    fontSize: 30,
    color: '#ffffff',

    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
