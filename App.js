import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Logo from './assets/Stargram icon.jpg'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C560BAQEWWGiLkZLOKQ/company-logo_200_200/0/1607925908164?e=2159024400&v=beta&t=fLPSTq0uYhQy-Pm1Sg0SdeidTs78JLqBy9eU1vI1wvo',
          }}
          style={{ width: 60, height: 60 }}
        />

        {/* <TextInput
              style={{
                height: 40,
                width: 150, 
                borderColor: 'gray',
                borderWidth: 1
              }}
           
              placeholder="Search"
        /> */}

      <Text style={styles.heading}>STARGRAM</Text>

      <StatusBar style="auto" />
    </View>
  );     
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
      color: 'yellow',  
      position: 'absolute',
      bottom: '10px'   
  } 
});
