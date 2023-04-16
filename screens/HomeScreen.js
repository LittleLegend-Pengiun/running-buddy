import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import {
    SafeAreaView,
  } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const navigation = useNavigation();
  function logout() {
    AsyncStorage.removeItem("userData");
    navigation.navigate("Welcome");
  }
  return (
    <SafeAreaView className="bg-[#fff] flex-1">      
      <View className="justify-center self-center pt-64">
        <Text>This is Home Screen</Text>
        <Button
         title='Log out'
         onPress={() => logout()}
          >Log out</Button>
        <Button 
         title="Back to home"
         onPress={() => {navigation.navigate("Welcome")}}
        />
      </View>
    </SafeAreaView>
  );
}