import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//Daniel's Components
import Home from './src/components/Home';
import Details from './src/components/Details';

//librerias
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createStaticNavigation } from '@react-navigation/stack';
import Favorites from './src/components/Favorites';
import AboutUs from './src/components/AboutUs';

const Stack = createStackNavigator()

//-------------------
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="AboutUs" component={AboutUs}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
