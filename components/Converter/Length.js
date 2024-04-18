// MassConverter.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

const Length = () => {
  const [meters, setMeters] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [miles, setMiles] = useState('');
  const [yards, setYards] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [centimeters, setCentimeters] = useState('');
  const [millimeters, setMillimeters] = useState('');

  const handleInputChange = (value, unit) => {
    if (unit === 'meters') {
      setMeters(value);
        setKilometers((parseFloat(value) / 1000).toFixed(2));
        setMiles((parseFloat(value) / 1609.34).toFixed(2));
        setYards((parseFloat(value) * 1.09361).toFixed(2));
        setFeet((parseFloat(value) * 3.28084).toFixed(2));
        setInches((parseFloat(value) * 39.3701).toFixed(2));
        setCentimeters((parseFloat(value) * 100).toFixed(2));
        setMillimeters((parseFloat(value) * 1000).toFixed(2));
    } else if (unit === 'kilometers') {
      setKilometers(value);
        setMeters((parseFloat(value) * 1000).toFixed(2));
        setMiles((parseFloat(value) / 1.60934).toFixed(2));
        setYards((parseFloat(value) * 1093.61).toFixed(2));
        setFeet((parseFloat(value) * 3280.84).toFixed(2));
        setInches((parseFloat(value) * 39370.1).toFixed(2));
        setCentimeters((parseFloat(value) * 100000).toFixed(2));
        setMillimeters((parseFloat(value) * 1000000).toFixed(2));
    } else if (unit === 'miles') {
      setMiles(value);
        setMeters((parseFloat(value) * 1609.34).toFixed(2));
        setKilometers((parseFloat(value) * 1.60934).toFixed(2));
        setYards((parseFloat(value) * 1760).toFixed(2));
        setFeet((parseFloat(value) * 5280).toFixed(2));
        setInches((parseFloat(value) * 63360).toFixed(2));
        setCentimeters((parseFloat(value) * 160934).toFixed(2));
        setMillimeters((parseFloat(value) * 1609340).toFixed(2));
    } else if (unit === "yards") {
      setYards(value);
        setMeters((parseFloat(value) / 1.09361).toFixed(2));
        setKilometers((parseFloat(value) / 1093.61).toFixed(2));
        setMiles((parseFloat(value) / 1760).toFixed(2));
        setFeet((parseFloat(value) * 3).toFixed(2));
        setInches((parseFloat(value) * 36).toFixed(2));
        setCentimeters((parseFloat(value) * 91.44).toFixed(2));
        setMillimeters((parseFloat(value) * 914.4).toFixed(2));
    }
    else if (unit === "feet") {
        setFeet(value);
            setMeters((parseFloat(value) / 3.28084).toFixed(2));
            setKilometers((parseFloat(value) / 3280.84).toFixed(2));
            setMiles((parseFloat(value) / 5280).toFixed(2));
            setYards((parseFloat(value) / 3).toFixed(2));
            setInches((parseFloat(value) * 12).toFixed(2));
            setCentimeters((parseFloat(value) * 30.48).toFixed(2));
            setMillimeters((parseFloat(value) * 304.8).toFixed(2));
      }
      else if (unit === "inches") {
        setInches(value);
        setMeters((parseFloat(value) / 39.3701).toFixed(2));
        setKilometers((parseFloat(value) / 39370.1).toFixed(2));
        setMiles((parseFloat(value) / 63360).toFixed(2));
        setYards((parseFloat(value) / 36).toFixed(2));
        setFeet((parseFloat(value) / 12).toFixed(2));
        setCentimeters((parseFloat(value) * 2.54).toFixed(2));
        setMillimeters((parseFloat(value) * 25.4).toFixed(2));
      }
      else if (unit === "centimeters") {
        setCentimeters(value);
        setMeters((parseFloat(value) / 100).toFixed(2));
        setKilometers((parseFloat(value) / 100000).toFixed(2));
        setMiles((parseFloat(value) / 160934).toFixed(2));
        setYards((parseFloat(value) / 91.44).toFixed(2));
        setFeet((parseFloat(value) / 30.48).toFixed(2));
        setInches((parseFloat(value) / 2.54).toFixed(2));
        setMillimeters((parseFloat(value) * 10).toFixed(2));
      }
      else if (unit === "millimeters") {
        setMillimeters(value);
        setMeters((parseFloat(value) / 1000).toFixed(2));
        setKilometers((parseFloat(value) / 1000000).toFixed(2));
        setMiles((parseFloat(value) / 1609340).toFixed(2));
        setYards((parseFloat(value) / 914.4).toFixed(2));
        setFeet((parseFloat(value) / 304.8).toFixed(2));
        setInches((parseFloat(value) / 25.4).toFixed(2));
        setCentimeters((parseFloat(value) / 10).toFixed(2));
      }
  };

  const clearAllFields = () => {
    setMeters('');
    setKilometers('');
    setMiles('');
    setYards('');
    setFeet('');
    setInches('');
    setCentimeters('');
    setMillimeters('');
  };

  const formatValue = (value) => {
    return isNaN(parseFloat(value)) ? '' : value;
  };

  return (
    <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>meters</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter meters...`}
                value={formatValue(meters)}
                onChangeText={(value) => handleInputChange(value, 'meters')}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>kilometers</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter kilometers...`}
                value={formatValue(kilometers)}
                onChangeText={(value) => handleInputChange(value, 'kilometers')}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>miles</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter miles...`}
                value={formatValue(miles)}
                onChangeText={(value) => handleInputChange(value, 'miles')}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>yard</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter yard...`}
                value={formatValue(yards)}
                onChangeText={(value) => handleInputChange(value, 'yards')}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>feet</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter feet...`}
                value={formatValue(feet)}
                onChangeText={(value) => handleInputChange(value, 'feet')}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>inches</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter inches...`}
                value={formatValue(inches)}
                onChangeText={(value) => handleInputChange(value, 'inches')}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>centimeters</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter centimeters...`}
                value={formatValue(centimeters)}
                onChangeText={(value) => handleInputChange(value, 'centimeters')}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>millimeters</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor={"grey"}
                placeholder={`Enter millimeters...`}
                value={formatValue(millimeters)}
                onChangeText={(value) => handleInputChange(value, 'millimeters')}
              />
            </View>
            <TouchableWithoutFeedback onPress={clearAllFields}>
              <View style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Clear All</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
    </ScrollView>
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

export default Length;
