import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Icon} from 'react-native-elements';
//import AudioRecord from 'react-native-audio-record';
//import {Buffer} from 'buffer';
//import firebase from '@react-native-firebase/app';
//import database from '@react-native-firebase/database';
export default class Extempore extends Component {
  constructor() {
    super();
    this.state = {
      record_status: false,
    };
  }

  async componentDidMount() {
    // await this.getPermission();
    // await this.fetchDatabase();
    // const options = {
    //   sampleRate: 16000,
    //   channels: 1,
    //   bitsPerSample: 16,
    //   wavFile: 'test.wav',
  }
  //AudioRecord.init(options);
  // AudioRecord.on('data', data => {
  //   const chunk = Buffer.from(data, 'base64');
  //   console.log('chunk size', chunk.byteLength);
  //   // do something with audio chunk
  // });
  //}
  //database = firebase.database();
  fetchDatabase = () => {
    // database()
    //   .ref('phone/' + phoneNumber + '/level')
    //   .on('value', function(snapshot) {
    //     //retrieve snapshot of database
    //     snapshot.forEach(function(child) {
    //       //retrieve phone numbers
    //       global.level = child.key;
    //       //retrieve access keys
    //       console.log('Level:' + level);
    //     });
    //   });
    // database()
    //   .ref('extempore/')
    //   .on('value', function(snapshot) {
    //     //retrieve snapshot of database
    //     snapshot.forEach(function(child) {
    //       //retrieve phone numbers
    //       global.level = child.key;
    //       //retrieve access keys
    //       console.log('Level:' + level);
    //     });
    //   });
  };
  text_state = {TextHolder: 'Hey There Its me'};
  changeText = () => {
    this.setText({TextHolder: 'This is new text'});
  };
  onPress = () => {
    // if (this.state.record_status === false) {
    //   this.setState({record_status: true});
    //   AudioRecord.start();
    //   console.log('Recording');
    // } else {
    //   this.setState({record_status: false});
    //   AudioRecord.stop();
    //   console.log('Recording stopped');
    // }
  };
  requestPermissionAudio = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ).catch(err => console.log(err));
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };
  requestPermissionStorage = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ).catch(err => console.log(err));
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };
  getPermission = async () => {
    await this.requestPermissionAudio();
    await this.requestPermissionStorage();
  };

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.question_box}>
          <Text style={styles.question}>{this.text_state.TextHolder}</Text>
        </View>

        <View style={styles.record}>
          <TouchableOpacity style={styles.record_touch} onPress={this.onPress}>
            {
              <Icon
                name={this.state.record_status ? 'mic' : 'mic-off'}
                size={125}
                color={this.state.record_status ? 'green' : '#8b0000'}
                style={styles.record_icon}
              />
            }
          </TouchableOpacity>
          <Text style={styles.record_text}>
            Status: {this.state.record_status ? 'Recording' : 'Not Recording'}
          </Text>
        </View>

        <TouchableOpacity style={styles.submit_button}>
          <Text style={styles.submit_button_text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ede6e3',
    height: '100%',
  },
  question_box: {
    width: '95%',
    backgroundColor: '#ede6e9',
    borderRadius: 15,
    marginTop: '10%',
    height: '40%',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 20,
  },
  question: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  record: {marginTop: '12%'},
  record_icon: {marginTop: '20%', alignSelf: 'center'},

  record_text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '2%',
    alignSelf: 'center',
  },
  submit_button: {
    width: '50%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#8b0000',
    marginTop: '15%',
    marginLeft: '25%',
    marginRight: '25%',
  },
  submit_button_text: {
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
});
