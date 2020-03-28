import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default useLocation = () => {
    const [location, setLocation] = useState({})
    const [status, setStatus] = useState('pending')

    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setStatus('failed')
        }
    }, [])

    useEffect(() => {
        getPermission().then(({status}) => setStatus(status))
    }, [])

    useEffect(() => {
        if (status === 'granted') {
            getLocation().then((location) => setLocation(location))            
        }
    }, [status])

    return status !== 'granted' ? {} : location
}

async function getPermission() {
    const status = await Permissions.askAsync(Permissions.LOCATION)
    return status
}

async function getLocation() {
    const location = await Location.getCurrentPositionAsync({});
    return location
}