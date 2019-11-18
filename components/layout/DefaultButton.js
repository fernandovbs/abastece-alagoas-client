import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export const DefaultButton = (props) => {
    const { title, style = '', textStyle = {}, onPress, children } = props;

    return (
        <TouchableOpacity onPress={onPress} style={(style && style) || styles.button}>
            {(title && <Text style={[styles.text, textStyle]}>{title}</Text>) ||
            children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignSelf: 'stretch',
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
        margin: 10
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});