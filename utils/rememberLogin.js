import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeToken(token) {
    try {
        await AsyncStorage.setItem("userData", token);
        let userData = await AsyncStorage.getItem("userData");
        let data = JSON.parse(userData);
        console.log(data);
    } catch (err) {
        console.error("async storage error:", err);
    }
}

export async function getToken() {
    try {
        let userData = await AsyncStorage.getItem("userData");
        let data = JSON.parse(userData);
        
        if (data) {
            console.log(data);
            return true;  
        } 
        return false;
    } catch (error) {
        console.error("Something went wrong", error);
        return false;
    }
}