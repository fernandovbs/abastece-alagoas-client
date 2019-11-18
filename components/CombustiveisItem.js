import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DefaultButton } from './layout/DefaultButton'

export default CombustiveisItem = ({combustivel = {id: 0, desc: 'Sem Registros'}}) =>
    <View style={styles.combustiveisButtonContainer}>
        <DefaultButton title={combustivel.desc} />
    </View>

const styles = StyleSheet.create({
    combustiveisButtonContainer: {
        width: "100%",
    }
})