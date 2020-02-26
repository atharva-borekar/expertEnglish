import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import colors from "../style/color/index"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5"
import EntypoIcon from "react-native-vector-icons/Entypo"
import RoundedButton from "../buttons/RoundedButton"
import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database'
export default class Level extends Component {
  database=firebase.database();
  writeEssentialData=(level)=>{
    firebase.database().ref('phone/'+phoneNumber+'/').update({
      level:1
    })
  }
  writeEffectiveData=(level)=>{
    firebase.database().ref('phone/'+phoneNumber+'/').update({
      level:2
    })
  }
  writeExpertData=(level)=>{
    firebase.database().ref('phone/'+phoneNumber+'/').update({
      level:3
    })
  }
    render() {
      return (
          <View style={styles.welcomeWrapper}>
            <Text style={styles.welcomeText}>
              CHOOSE YOUR LEVEL OF COMMUNICATION
            </Text>
            <RoundedButton 
                text="Essential" 
                textColor={colors.black}
                backgroundColor={colors.white}
                onPress={this.writeEssentialData}
                icon={
                  <MaterialIcon name="seed-outline" size={30} style={styles.Icon}/>
                }
                />
            <RoundedButton 
                text="Effective" 
                textColor={colors.black}
                backgroundColor={colors.white}
                onPress={this.writeEffectiveData}
                icon={
                  <Icon name="seedling" size={30} style={styles.Icon}/>
                }
                />
            <RoundedButton 
                text="Expert" 
                textColor={colors.black}
                backgroundColor={colors.white}
                onPress={this.writeExpertData}
                icon={
                  <EntypoIcon name="tree" size={30} style={styles.Icon}/>
                }
                />
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
      welcomeText: {
        fontSize: 27,
        color: colors.black,
        marginBottom: 120,
        fontFamily:'notosans_bold',
        textAlign:'center'
      },
      Icon: {
        color: colors.green01,
        position: "relative",
        left: 60,
        zIndex: 8
      }
    });