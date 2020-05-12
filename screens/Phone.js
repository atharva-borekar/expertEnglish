import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  AsyncStorage,
  Image,
  ImageBackground,
} from 'react-native';

import InputField from '../components/InputField';
import NextArrowButton from '../buttons/NextArrowButton';
//import firebase from '@react-native-firebase/app';
//import database from '@react-native-firebase/database';
export default class Phone extends Component {
  constructor(props) {
    super(props);
    //specified state for changing text in frontend
    this.state = {
      phone: 0,
      access: 0,
    };
    // global.login
    //binding functions
    // this.handlePhoneChange = this.handlePhoneChange.bind(this);
    // this.handleAccessChange = this.handleAccessChange.bind(this);
  }

  async componentDidMount() {
    // await this.fetchDatabase();
  }
  // database = firebase.database();
  fetchDatabase = async () => {
    // database()
    //   .ref('phone/')
    //   .on('value', function(snapshot) {
    //     //retrieve snapshot of database
    //     snapshot.forEach(function(child) {
    //       //retrieve phone numbers
    //       global.phoneNumber = child.key;
    //       //retrieve access keys
    //       global.accessKey = child.val().access;
    //       console.log('Firebase:' + phoneNumber);
    //       console.log('Firebase key:' + accessKey);
    //     });
    //   });
  };
  handlePhoneChange(phone) {
    // this.setState({phone: phone});
    //change value of phone state
  }
  handleAccessChange = access => {
    // this.setState({access: access});
    //change value of access key state
  };
  Login = () => {
    // var phoneValue = this.state.phone;
    // var accessValue = this.state.access;
    // //check values data retrieved from database and frontend
    // if (phoneNumber == phoneValue && accessKey == accessValue) {
    //   this.props.navigation.navigate('Level');
    //   // global.login=true
    //   AsyncStorage.setItem('login', 'true');
    // } else {
    //   if (phoneNumber != phoneValue) {
    //   }
    // }
  };

  render() {
    return (
      <View style={styles.scrollViewWrapper}>
        <ImageBackground
          source={require('../images/english_back.jpg')}
          style={{flex: 1}}>
          <View style={{}}>
            <Image
              style={{alignSelf: 'center', marginTop: '40%'}}
              source={require('../images/Logo.jpg')}
            />

            <Text style={styles.loginHeader}>LOGIN</Text>
            <InputField
              labelText="PHONE NUMBER"
              labelTextSize={16}
              labelColor="#ffffff"
              textColor="#ffffff"
              borderBottomColor="#000000"
              inputType="number"
              customStyle={{marginBottom: '10%'}}
              value={this.state.phone}
              onChangeText={this.handlePhoneChange}
            />

            <NextArrowButton onPress={this.Login} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: '300',
    textAlign: 'center',
    padding: 30,
  },
});
