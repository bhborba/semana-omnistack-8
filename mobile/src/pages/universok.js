import React, { Component } from 'react';

import { StyleSheet, Platform, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

export default class MainActivity extends Component {

  ActivityIndicatorLoadingView() {
    
    return (

      <ActivityIndicator
        color='#009688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

     render() {
       
       return (
    
         <WebView 
         style={styles.WebViewStyle} 
         source={{uri: 'https://loja.universok.com.br'}} 
         javaScriptEnabled={true}
         domStorageEnabled={true}
         renderLoading={this.ActivityIndicatorLoadingView} 
         startInLoadingState={true}  
         />
   
       );
     }
   }
   


const styles = StyleSheet.create(
{

WebViewStyle:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 30 : 0
},

ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  
}
});