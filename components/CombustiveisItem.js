import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DefaultButton } from './layout/DefaultButton'
import { useNavigation } from 'react-navigation-hooks'

export default CombustiveisItem = ({combustivel = {id: 0, desc: 'Sem Registros'}}) => {
    const navigation = useNavigation()

    return (<View style={styles.combustiveisButtonContainer}>
        <DefaultButton title={combustivel.desc} onPress={() => navigation.navigate('PostosProximos', {combustivel})} />
    </View>)
}

const styles = StyleSheet.create({
    combustiveisButtonContainer: {
        width: "100%",
    }
})