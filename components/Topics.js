import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Connection({ navigation }) {
  const handlePress = () => {
    navigation.navigate('AnotherScreen');
  };

  return (
    <View style={styles.motherContainer}>
      <View style={styles.container}>
        <Text style={styles.paragraph_1}>
          Explore topics you are interested in
        </Text>
        <View style={styles.row}>
          <Text style={styles.paragraph}>CS</Text>
          <Text style={styles.paragraph}>JS</Text>
          <Text style={styles.paragraph}>AL</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.paragraph}>MC</Text>
          <Text style={styles.paragraph}>IS</Text>
          <Text style={styles.paragraph}>WR</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.paragraph}>JA</Text>
          <Text style={styles.paragraph}>BT</Text>
          <Text style={styles.paragraph}>PT</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  motherContainer: {
    alignItems: 'center',
    // margin:5,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#c9effa',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    width: 310,
    height: 300,
    paddingTop: 50,
  },
  row: {
    flexDirection: 'row',
  },
  paragraph_1: {
    borderRadius: 25,
    margin: 10,
    width: 130,
    fontSize: 14,
    marginTop: -40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    borderRadius: 25,
    borderWidth: 3,
    width: 70,
    height: 40,
    padding: 10,
    margin: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#86e2ff',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    margin: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
