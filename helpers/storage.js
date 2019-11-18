import {AsyncStorage} from 'react-native'

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(`AbasteceAL:${key}`, JSON.stringify(value))
    } catch (error) {
        console.log('error', error)
        return null;
    }
}

export const getItem = async key => {
    try {
        let value = await AsyncStorage.getItem(`AbasteceAL:${key}`)

        if (value !== null) {
            return JSON.parse(value);
        } else 
        {
            return null
        }
    } catch (error) {
        console.log('error', error)
        return null;
    }
}