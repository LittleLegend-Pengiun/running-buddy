import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import BarCodeScreen from './screens/BarCodeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" 
         component={WelcomeScreen} 
         options={{presentation: "transparentModal", headerShown: false}}
        />
        <Stack.Screen name="Home"
         component={HomeScreen}
         options={{presentation: "transparentModal", headerShown: false}}
        />
        <Stack.Screen name="Login"
         component={LoginScreen}
         options={{presentation: "transparentModal", headerShown: false}}
        />
        <Stack.Screen name="Barcode" 
         component={BarCodeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;