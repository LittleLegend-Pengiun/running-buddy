import { Text, View } from 'react-native';
import {
    SafeAreaView,
  } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-[#fff]">      
      <View className="items-center justify-center">
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}