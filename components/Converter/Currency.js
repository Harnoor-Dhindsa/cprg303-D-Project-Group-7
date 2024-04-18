import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from 'axios';

const Currency = () => {
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [exchangeRate, setExchangeRate] = useState(0);
    const [amount, setAmount] = useState(1);
    const [currencies, setCurrencies] = useState([]);

    const convertCurrency = () => {
        let result = (amount * exchangeRate).toFixed(2); // Adjusted calculation here
        return result;
    };

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get(`https://api.vatcomply.com/rates`);
                const { rates } = response.data;
                setCurrencies(Object.keys(rates));
                setExchangeRate(rates[fromCurrency]);
            } catch (error) {
                console.error("Error fetching currencies:", error);
            }
        };
        
        fetchCurrencies();
    }, [fromCurrency]);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await axios.get(`https://api.vatcomply.com/rates?base=${fromCurrency}`);
                const { rates } = response.data;
                setExchangeRate(rates[toCurrency]); // Adjusted here to set the correct exchange rate
            } catch (error) {
                console.error(error);
            }
        };
        fetchExchangeRate();
    }, [fromCurrency, toCurrency]);

    const handleAmountChange = (text) => {
        if (text === "") {
            setAmount(null); // Set amount to null if input is empty
        } else {
            const value = parseFloat(text);
            if (!isNaN(value)) {
                setAmount(value);
            }
        }
    };
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Currency Converter</Text>
                <TextInput
                 style={styles.input}
                 value={amount !== null ? amount.toString() : ""}
                 keyboardType="numeric"
                 onChangeText={(text) => handleAmountChange(text)}
                />
                <View style={styles.pickerContainer}>
                    <Picker
                        style={Platform.OS === "android" ? styles.pickerAndroid : styles.pickerIOS}
                        itemStyle={{color: "orange", fontWeight: "bold",}} // Set background color to orange
                        selectedValue={fromCurrency}
                        onValueChange={(itemValue) => setFromCurrency(itemValue)}>
                        {currencies.map((currency, index) => (
                            <Picker.Item key={index} label={currency} value={currency} />
                        ))}
                    </Picker>
                    <Picker
                        style={Platform.OS === "android" ? styles.pickerAndroid : styles.pickerIOS}
                        itemStyle={{color: "orange", fontWeight: "bold",}} // Set background color to orange
                        selectedValue={toCurrency}
                        onValueChange={(itemValue) => setToCurrency(itemValue)}>
                        {currencies.map((currency, index) => (
                            <Picker.Item key={index} label={currency} value={currency} />
                        ))}
                    </Picker>
                </View>
                <Text style={styles.result}>{amount} {fromCurrency} = {convertCurrency()} {toCurrency}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
        color: "orange",
    },
    input: {
        borderWidth: 2,
        borderColor: "orange",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: "80%",
        fontSize: 16,
        color: "orange",
        fontWeight: "bold",
    },
    pickerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50, // Adjust this value as needed
    },
    pickerIOS: {
        height: 50, // Adjust height as needed
        width: 150, // Adjust width as needed
        marginHorizontal: 10,
    },
    pickerAndroid: {
        height: 50, // Adjust height as needed
        width: 150, // Adjust width as needed
        marginHorizontal: 10,
        backgroundColor: "orange",
    },
    result: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: "50%",
        color: "orange",
    },
});

export default Currency;
