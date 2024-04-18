// MassConverter.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Weight = () => {
  const [grams, setGrams] = useState('');
  const [kilograms, setKilograms] = useState('');
  const [pounds, setPounds] = useState('');
  const [ounce, setOunce] = useState('');

  const handleInputChange = (value, unit) => {
    if (unit === 'grams') {
      setGrams(value);
      setKilograms((parseFloat(value) / 1000).toFixed(2));
      setPounds((parseFloat(value) * 0.00220462).toFixed(2));
      setOunce((parseFloat(value) * 0.035274).toFixed(2));
    } else if (unit === 'kilograms') {
      setKilograms(value);
      setGrams((parseFloat(value) * 1000).toFixed(2));
      setPounds((parseFloat(value) * 2.20462).toFixed(2));
        setOunce((parseFloat(value) * 35.274).toFixed(2));
    } else if (unit === 'pounds') {
      setPounds(value);
      setGrams((parseFloat(value) / 0.00220462).toFixed(2));
      setKilograms((parseFloat(value) / 2.20462).toFixed(2));
        setOunce((parseFloat(value) * 16).toFixed(2));
    } else if (unit === "ounce") {
      setOunce(value);
      setGrams((parseFloat(value) / 0.035274).toFixed(2));
      setKilograms((parseFloat(value) / 35.274).toFixed(2));
      setPounds((parseFloat(value) / 16).toFixed(2));
    }
  };

  const clearAllFields = () => {
    setGrams('');
    setKilograms('');
    setPounds('');
    setOunce('');
  };

  const formatValue = (value) => {
    return isNaN(parseFloat(value)) ? '' : value;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Grams</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={"grey"}
            placeholder={`Enter grams...`}
            value={formatValue(grams)}
            onChangeText={(value) => handleInputChange(value, 'grams')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Kilograms</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={"grey"}
            placeholder={`Enter kilograms...`}
            value={formatValue(kilograms)}
            onChangeText={(value) => handleInputChange(value, 'kilograms')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pounds</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={"grey"}
            placeholder={`Enter pounds...`}
            value={formatValue(pounds)}
            onChangeText={(value) => handleInputChange(value, 'pounds')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ounce</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={"grey"}
            placeholder={`Enter ounce...`}
            value={formatValue(ounce)}
            onChangeText={(value) => handleInputChange(value, 'ounce')}
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

export default Weight;
