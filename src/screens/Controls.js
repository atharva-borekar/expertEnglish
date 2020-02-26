import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, View} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import AntIcon from 'react-native-vector-icons/AntDesign'
import colors from "../style/color/index"
import TrackPlayer from 'react-native-track-player'

export default class Controls extends Component{
  constructor(){
    super()
    this.state={
      AudioStatus:true
    }
  }
  componentDidMount(){
    TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      stopWithApp:true,
      capabilities:[
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ]
    })
  }
  render(){
    return(
            <View style={styles.Wrapper}>  
            <TouchableOpacity onPress={()=>this.playPrevious()}>
                {
                  <AntIcon
                      name="stepbackward"
                      color={colors.black}
                      size={38}
                      style={styles.icon}
              />
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.playAudio()}>
                {
                  this.state.AudioStatus ?
                  <Icon
                      name="play"
                      color={colors.black}
                      size={32}
                      style={styles.icon}
              />:<Icon
                      name="pause"
                      color={colors.black}
                      size={32}
                      style={styles.icon}/>
                }
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.playNext()}>
                {
                  <AntIcon
                      name="stepforward"
                      color={colors.black}
                      size={38}
                      style={styles.icon}
              />
                }
              </TouchableOpacity>
              </View>
                   
    );
  } 
  playAudio=async()=>
  {
      if(this.state.AudioStatus){
          this.setState({
              AudioStatus: false
          });
          await TrackPlayer.reset()
          await TrackPlayer.add(data)
          
          await TrackPlayer.play()
      }else{
          this.setState({
              AudioStatus: true
          });
          await TrackPlayer.pause()
      }
  }
  playPrevious=async()=>{
    await TrackPlayer.skipToPrevious()
  }
  playNext=async()=>{
    await TrackPlayer.skipToNext()
  }
}
const styles=StyleSheet.create({
  Wrapper:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop: 200
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});

const data=[
  {
    'id':'101',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/A%20well%20educated%20mind%20vs%20a%20well%20formed%20mind%20Dr.%20Shashi%20Tharoor%20at%20TEDxGateway%202013.mp3',
    
  },
  {
    'id':'102',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/dr_pawan_agrawal_mumbai_dabbawalas.mp3'
  },
  {
    'id':'103',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/how_a_13_year_old_changed_impossible_to_im_possible_sparsh_shah.mp3'
  },
  {
    'id':'104',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/if_i_can_you_can_struggle_of_10_yrs_from_callcentre_to_ips_suraj_singh_parihar.mp3'
  },
  {
    'id':'105',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/kiran_bedi_how_i_remade_one_of_indias_toughest_prisons.mp3'
  },
  {
    'id':'106',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/taking_india_to_mars_the_story_behind_indias_space_program_ritu_karidhal.mp3'
  },
  {
    'id':'107',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/the_3_myths_of_the_indian_education_system_vinay_menon.mp3'
  },
  {
    'id':'108',
    'url':'https://storage.googleapis.com/expertenglish-c9d27.appspot.com/vijay_shekhar_sharma_biography_paytm_founder_success_story_startup_stories.mp3'
  }
]