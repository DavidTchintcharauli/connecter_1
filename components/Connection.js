import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Connection() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Connection
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,    
  },
  paragraph:{
    backgroundColor: '#FFDC14',
    justifyContent: 'center',
    padding: 23,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 40,
    width: 250,
    height:  70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});