// MassConverter.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Temperature = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleInputChange = (value, unit) => {
    if (unit === 'celsius') {
      setCelsius(value);
        setFahrenheit((parseFloat(value) * 1.8 + 32).toFixed(2));
        setKelvin((parseFloat(value) + 273.15).toFixed(2));
    } else if (unit === 'fahrenheit') {
      setFahrenheit(value);
        setCelsius(((parseFloat(value) - 32) / 1.8).toFixed(2));
        setKelvin(((parseFloat(value) - 32) / 1.8 + 273.15).toFixed(2));
    } else if (unit === 'kelvin') {
        setKelvin(value);
        setCelsius((parseFloat(value) - 273.15).toFixed(2));
        setFahrenheit(((parseFloat(value) - 273.15) * 1.8 + 32).toFixed(2));
    }
  };

  const clearAllFields = () => {
    setCelsius('');
    setFahrenheit('');
    setKelvin('');
  };

  const formatValue = (value) => {
    return isNaN(parseFloat(value)) ? '' : value;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Celsius</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={"grey"}
            placeholder={`Enter celsius...`}
            value={formatValue(celsius)}
            onChangeText={(value) => handleInputChange(value, 'celsius')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fahrenheit</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={"grey"}
            placeholder={`Enter fahrenheit...`}
            value={formatValue(fahrenheit)}
            onChangeText={(value) => handleInputChange(value, 'fahrenheit')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Kelvin</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={"grey"}
            placeholder={`Enter kelvin...`}
            value={formatValue(kelvin)}
            onChangeText={(value) => handleInputChange(value, 'kelvin')}
          />
        </View>
        <TouchableWithoutFeedback onPress={clearAllFields}>
          <View style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear All</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'orange',
  },
  input: {
    height: 50,
    width: 300,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: "orange",
  },
  clearButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 10,
  },
  clearButtonText: {
    color: 'black', // White color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Temperature;
