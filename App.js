/*Screen to view single user*/
import React from 'react';
import { Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
 
  render() {
    return <WebView source={{ uri: 'https://frosty-mcclintock-3b743e.netlify.app/' }} />;
  }
}