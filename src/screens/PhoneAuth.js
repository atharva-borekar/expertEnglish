import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ImageBackground
} from 'react-native'
import { firebase } from '@react-native-firebase/auth';

export default class LoginAuth extends Component {
  state = {
    phone: '',
    confirmResult: null,
    verificationCode: '',
    userId: ''
  }
  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(this.state.phone)
  }

  handleSendCode = () => {
    // Request to send OTP
    if (this.validatePhoneNumber()) {
      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phone)
        .then(confirmResult => {
          this.setState({ confirmResult })
        })
        .catch(error => {
          alert(error.message)

          console.log(error)
        })
    } else {
      alert('Invalid Phone Number')
    }
  }

  changePhoneNumber = () => {
    this.setState({ confirmResult: null, verificationCode: '' })
  }

  handleVerifyCode = () => {
    // Request for OTP verification
    const { confirmResult, verificationCode } = this.state
    if (verificationCode.length == 6) {
      confirmResult
        .confirm(verificationCode)
        .then(user => {
          this.setState({ userId: user.uid })
          alert(`Verified! ${user.uid}`)
        })
        .catch(error => {
          alert(error.message)
          console.log(error)
        })
    } else {
      alert('Please enter a 6 digit OTP code.')
    }
  }

  renderConfirmationCodeView = () => {
    return (
      <View style={styles.verificationView}>
        <TextInput
          style={styles.textInput}
          placeholder='Verification code'
          placeholderTextColor='#eee'
          value={this.state.verificationCode}
          keyboardType='numeric'
          onChangeText={verificationCode => {
            this.setState({ verificationCode })
          }}
          maxLength={6}
        />
        <TouchableOpacity
          style={[styles.themeButton, { marginTop: 20 }]}
          onPress={this.handleVerifyCode}>
          <Text style={styles.themeButtonTitle}>Verify Code</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.welcomeWrapper}>
        <Text style={styles.loginHeader}>LOGIN</Text>
        <View style={styles.page}>
          <TextInput
            style={styles.textInput}
            placeholder='Phone Number with country code'
            placeholderTextColor='#eee'
            keyboardType='phone-pad'
            value={this.state.phone}
            onChangeText={phone => {
              this.setState({ phone })
            }}
            maxLength={15}
            editable={this.state.confirmResult ? false : true}
          />

          <TouchableOpacity
            style={[styles.themeButton, { marginTop: 20 }]}
            onPress={
              this.state.confirmResult
                ? this.changePhoneNumber
                : this.handleSendCode
            }>
            <Text style={styles.themeButtonTitle}>
              {this.state.confirmResult ? '  Change Phone Number  ' : '   Send Code   '}
            </Text>
          </TouchableOpacity>

          {this.state.confirmResult ? this.renderConfirmationCodeView() : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    // marginTop: 30,
    // padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    marginTop: 20,
    width: '90%',
    height: 60,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#000',
    fontSize: 20,
    fontFamily:'lobster'
  },
  themeButton: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10
  },
  themeButtonTitle: {
    fontSize: 24,
    fontFamily:'acme',
    color: '#000'
  },
  verificationView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },
  loginHeader: {
    fontSize: 60,
    color: "#000",
    fontWeight: "300",
    marginTop: 60,
    textAlign:'center',
    padding:30,
    fontFamily:'lakki'
  }
})
