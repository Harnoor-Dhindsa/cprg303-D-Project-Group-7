
import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./components/Calculator/Home";
import Weight from "./components/Converter/weight";
import Currency from "./components/Converter/Currency";
import Temperature from "./components/Converter/Temperature";
import Length from "./components/Converter/Length";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ConverterScreens = () => {
  return(
  <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: "orange", // Color of the active tab
      tabBarInactiveTintColor: 'gray', // Color of inactive tabs
      tabBarStyle: { // Background color of the tab bar
        paddingVertical: 9,
        height: 90,
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 5,
      },
    }}
  >
    <Tab.Screen 
      name="Weight" 
      component={Weight} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="weight" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Currency" 
      component={Currency} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="currency-exchange" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Temperature" 
      component={Temperature} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="temperature-low" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Length" 
      component={Length} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="ruler" size={size} color={color}  />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const IconColor = darkMode ? "white" : "black";
  const IonIcon = darkMode ? "sunny-outline" : "moon-outline"

  return (
      <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
        <StatusBar style={darkMode ? "light" : "dark"} />
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} theme={darkMode ? DarkTheme : DefaultTheme} options={({ navigation }) => ({
              title: 'Calculator',
              headerLeft: () => (
                <FontAwesome
                  name="exchange"
                  size={30}
                  color={IconColor}
                  style={{ marginLeft: 10 }}
                  onPress={() => navigation.navigate('Converter')} // Navigate to Home screen
                />
              ),
              headerRight: () => (
                <Ionicons
                  name={IonIcon}
                  size={30}
                  color={IconColor}
                  style={{ marginRight: 10 }}
                  onPress={toggleDarkMode}
                />
              ),
            })} />
          <Stack.Screen name="Converter" component={ConverterScreens} theme={darkMode ? DarkTheme : DefaultTheme} options={({ navigation }) => ({
              title: 'Converter',
              headerLeft: () => (
                <Ionicons
                  name="calculator"
                  size={34}
                  color={IconColor}
                  style={{ marginLeft: 10 }}
                  onPress={() => navigation.navigate('Home')} // Navigate to Home screen
                />
              ),
              headerRight: () => (
                <Ionicons
                  name={IonIcon}
                  size={30}
                  color={IconColor}
                  style={{ marginRight: 10 }}
                  onPress={toggleDarkMode}
                />
              ),
            })} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});