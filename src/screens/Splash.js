import React, { Component } from "react";
import { StyleSheet, Text, View, Image, AsyncStorage } from "react-native";
import colors from "../style/color";

export default class Splash extends Component {
  //check if component has been mounted on device
  componentDidMount(){
    setTimeout(
        ()=>{
          AsyncStorage.getItem('login',(err,result)=>{
            console.log(result)
            if(result=='true'){
              this.props.navigation.navigate('App')
            }
            else{
              this.props.navigation.navigate('Auth')
            }
          })
        },
        2*1000
    );
    //if mounted then delay for 2 seconds to display next screen
  }
  render() {
    return (
        <View style={styles.welcomeWrapper}>
          {/* add logo to splash screen */}
          <Image
            style={styles.logo}
            source={require("../img/Logo.jpg")}
          />
          
          <Text style={styles.welcomeText}>
            "Elevating Skills and Empowering People"
          </Text>
        </View>   
    );
  }
}
const styles = StyleSheet.create({
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 300,
      height: 120,
      marginTop: 50,
      marginBottom: 40
    },
    welcomeText: {
      fontSize: 20,
      color: colors.black,
      marginBottom: 40,
      fontFamily:'lobster'
    }
  });
 
