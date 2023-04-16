import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import {
    SafeAreaView,
  } from 'react-native-safe-area-context';
import { storeToken } from '../utils/rememberLogin';

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigation = useNavigation();


  function checkPassword(username, password) {
    if (username === 'admin' && password == 'pass') {
        navigation.navigate("Home");
        storeToken("1");
    }
    else {
        Alert.alert("Login error", "Username or password is incorrect");
    }
  }


  return (
    <SafeAreaView className="bg-[#fff] flex-1 pt-40">      
       <View className="self-center items-center justify-center bg-inherit">
        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          placeholder={'Username'}
          className="w-52 h-11 p-3 border-2 border-black mb-3"
        />
        <TextInput
          value={pass}
          onChangeText={(pass) => setPass(pass)}
          placeholder={'Password'}
          secureTextEntry={true}
          className="w-52 h-11 p-3 border-2 border-black mb-3"
        />
        
        <Button
          title={'Login'}
          className="w-52 h-11 p-3 border-2 border-black mb-3"
          onPress={() => checkPassword(username, pass)}
        />
      </View>

      <View className="pt-5 self-center items-center justify-center bg-inherit">
        <Text className="font-bold">Username: admin</Text>
        <Text className="font-bold">Password: pass</Text>
      </View>
    </SafeAreaView>
  );
}