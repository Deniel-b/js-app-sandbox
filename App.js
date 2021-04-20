import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NativeRouter } from 'react-router-native';

import AppPage from './src/components/appPage/appPage';
import { useEffect } from 'react';
import TcpSocket from 'react-native-tcp-socket';



/*import socketIO from "socket.io-client";

const socket = socketIO("95.37.73.173:5000");
socket.connect()*/

const socket = TcpSocket.createConnection({host:'localhost', port:"5000"}, () => {
  socket.write("Connected");
  console.log("Connected")
})


function toUTF8Array(str) {
  var utf8 = [];
  for (var i=0; i < str.length; i++) {
      var charcode = str.charCodeAt(i);
      if (charcode < 0x80) utf8.push(charcode);
      else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6), 
                    0x80 | (charcode & 0x3f));
      }
      else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12), 
                    0x80 | ((charcode>>6) & 0x3f), 
                    0x80 | (charcode & 0x3f));
      }
      else {
          i++;
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                    | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18), 
                    0x80 | ((charcode>>12) & 0x3f), 
                    0x80 | ((charcode>>6) & 0x3f), 
                    0x80 | (charcode & 0x3f));
      }
  }
  return utf8;
}


const App = () => {
  
  return (  
    <NativeRouter>
          <SafeAreaView style={{backgroundColor: "#ffffff"}}>
            <View style={{backgroundColor: '#ffffff'}}>
              <AppPage socket={socket}/>
            </View>
          </SafeAreaView>
    </NativeRouter>
  );
}

export default App;

/*import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import TcpSocket from 'react-native-tcp-socket';

export default class App extends React.Component {
  _connect = () => {
    client = TcpSocket.createConnection({
      host: "95.37.73.173",
      port: "5000"
    });
  }



  render(){
    return(
      <View >
        <TouchableOpacity
          onPress={this._connect}
        >
          <BtnWrapper>
          <Text>Connect</Text>
          </BtnWrapper>
        </TouchableOpacity>
      </View>
    );
  };
}


const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #79CF77;
  margin-bottom: ${props => props.last ? 0 : "80px"};
`;*/