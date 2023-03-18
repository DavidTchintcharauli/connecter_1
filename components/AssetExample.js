import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function AssetExample({ navigation }) {
  const handlePress = () => {
    navigation.navigate('AnotherScreen');
  };

  return (
    <View style={styles.motherContainer}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Search for a job
        </Text>
        <Text style={styles.paragraph}>
          Find a person you know
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  motherContainer: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#c9effa',
    borderRadius: 90,
    width: 310,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  paragraph: {
    justifyContent: 'center',
    borderRadius: 25,
    width: 250,
    height: 50,
    padding: 10,
    margin: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#86e2ff',
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




