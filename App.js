import * as React from 'react';
import { Text, View, StyleSheet,Stack } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigation } from '@react-navigation/native-stack';

// You can import from local files
import AssetExample from './components/AssetExample';
import Connection from './components/Connection';
import Topics from './components/Topics';
import Headerline from './body/Headerline';
import Footerline from './body/Footerline';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function HomeScreen(){
  return (
    <View style={{flex: 1, alignItem: 'center', justifyContent: 'center', }}>
    <Text>Home</Text>
    </View>
  );
}


export default function App() {
  return (
    
    <View style={styles.container}>
      <Card>
        <Headerline />     
        <AssetExample />     
        <Connection />     
        <Topics />    
        <Footerline />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#c9effa',
  },
});
