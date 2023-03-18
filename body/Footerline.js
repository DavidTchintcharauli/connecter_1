import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Footerline({ navigation }) {
  const handlePress = () => {
    navigation.navigate('AnotherScreen');
  };

  return (
    <View style={styles.motherContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image style={styles.icon} source={require('../assets/english.png')} />
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image style={styles.icon} source={require('../assets/sapport.png')} />
            <Text style={styles.buttonText}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image style={styles.icon} source={require('../assets/about.png')} />
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image style={styles.icon} source={require('../assets/rules.png')} />
            <Text style={styles.buttonText}>Rules</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  motherContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#c9effa',
    height: 100,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
});