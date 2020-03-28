import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DefaultButton } from './layout/DefaultButton'

export default PostosItem = ({posto = {}}) => {
    const priceDate = posto.dthEmissaoUltimaVenda.slice(0, 10)
    const priceTime = posto.dthEmissaoUltimaVenda.slice(11, 19)
    
    return (<View style={styles.postosItem}>
        <DefaultButton>
            <Text>
                {posto.nomFantasia ? posto.nomFantasia : posto.nomRazaoSocial}
            </Text>
            <Text style={styles.price}>
                R$ {posto.valUnitarioUltimaVenda} em {priceDate} as {priceTime}
            </Text>
        </DefaultButton>
        {console.log(posto)}
    </View>)
}


const styles = StyleSheet.create({
    postosItem: {
        width: "100%",
    },
    price: {
        fontWeight: 'bold'        
    }
})
