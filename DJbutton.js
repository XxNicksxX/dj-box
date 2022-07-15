import React, { Component } from 'react';
import { View, Button, Alert,TouchableOpacity,Text } from 'react-native';
import {Audio} from "expo-av";

export default class Djbutton extends React.Component{
 playSound = async ()=> {
   await Audio.Sound.createAsync(
     {
       uri: this.props.uri,
     },
     {
       shouldPlay:true,
     }

   )
 }
 
  render(){
   return(
      <TouchableOpacity style={{
           backgroundColor:this.props.bgcolor,
           width:200,
           height:40,
           alignItems:"center",
          justifyContent:"center",
          alignSelf:"center",
          borderRadius:300
         
         }}
         onPress={this.playSound}
          
        
         >
          <Text style={{
            fontFamily:"pastel",
            fontSize:20,
            color:"white"
          }}>
         { this.props.text}
          </Text>
         </TouchableOpacity>
   )
    
  }
}