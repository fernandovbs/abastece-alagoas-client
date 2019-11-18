import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { DefaultButton } from './DefaultButton'

export default function Header({title = ''}) {
    return (
        <View style={styles.view}>
            <DefaultButton title='' style={styles.button}>
                <Icon type='feather' name='grid' />
            </DefaultButton>
            <Text style={styles.text}>{title}</Text>
            <DefaultButton title='' style={styles.button}>
                <Icon type='feather' name='search' />
            </DefaultButton>            
        </View>
    )    
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20, 
    },
    button: {
        height: 40,
      //  backgroundColor: '#FFF',
    },

    text: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',

    },
});