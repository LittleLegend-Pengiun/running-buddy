import { Text, View } from 'react-native';
import {
    SafeAreaView,
  } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-[#fff] flex-1">      
      <View className="justify-center self-center pt-64">
        <Text>This is Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}