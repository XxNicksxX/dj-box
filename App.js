import React, { Component } from 'react';
import { View, Button, Alert,TouchableOpacity,Text } from 'react-native';
import {Audio} from "expo-av";
import DJbutton from "./DJbutton"

export default class App extends Component { 
  render(){
    return(
      <View
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <DJbutton
          text="som 1"
          bgcolor="green"
          uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
          />
          <DJbutton
           text="som 2"
          bgcolor="red"
          uri="http://soundbible.com/grab.php?id=1462&type=mp3"
          />
          <DJbutton
          text="som 3"
          bgcolor="blue"
          uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
          />
          <DJbutton
          bgcolor="yellow"
          text="som 4"
          uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
          />
      </View>
    )
    }

}