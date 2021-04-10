import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NativeRouter } from 'react-router-native';

import AppPage from './src/components/appPage/appPage';
import { useEffect } from 'react';
import io from "socket.io-client";

const URL = 'http://95.37.73.173:5000/';
const socket = io(URL, { forceNode: false });

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
  useEffect(() => {
    socket.on('connect', () => {
      console.log("CONNECTED");
      var tmp = toUTF8Array("Synhr\0\r\n");
      console.log(tmp)
      socket.send(tmp)
    });

    socket.on('disconnect', () => {
      console.log('connection to server lost.');
    });
  }, []);
 
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