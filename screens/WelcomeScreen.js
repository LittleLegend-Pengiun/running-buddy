import React from 'react'
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';

function WelcomeScreen() {
  return (
    <>     
      <View className="bg-[#5D63D1] rounded-xl relative">
        <Animatable.Image 
         source={require("../assets/ezgif1.gif")}
         animation='slideInUp'
         iterationCount={1}
         className="w-96 h-96"
        />
        <View className="pt-3 pb-10">
          <Text className="text-white text-2xl space-y-2 text-center justify-center">RUNNING BUDDY</Text>
        </View>
      </View>
      <View className="items-center justify-center align-middle pt-24">
        <TouchableOpacity 
         className="bg-[#5D63D1] text-white font-bold py-4 px-20 rounded-full"
        >
          <Text className="text-white text-xl">Bắt đầu</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default WelcomeScreen