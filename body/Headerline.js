import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Headerline({ navigation }) {
  const handlePress = () => {
    navigation.navigate('AnotherScreen');
  };

  return (
    <View style={styles.motherContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image style={styles.icon} source={require('../assets/jobIcon.png')} />
            <Text style={styles.buttonText}>Jobs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  motherContainer: {
    top: -40,
  },
  container: {
    backgroundColor: '#c9effa',
    height: 70,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
  icon: {
    height: 30,
    width: 50,
  },
});