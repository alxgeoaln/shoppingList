import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: object | Array<any>, key: string) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log('storeDataError', e);
    }
};

const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('getDataError', e);

    }
}

const removeStorage = async () => await AsyncStorage.clear()

export {
    storeData,
    getData,
    removeStorage
}