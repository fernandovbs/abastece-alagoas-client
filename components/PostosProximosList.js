import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import useLocation from './location'
import PostosItem from './PostosItem'

import { getPostos } from './../redux/actionCreators'

const PostosProximosList = ({postos, getPostos, navigation}) => {
    const location = useLocation()
    const {combustivel} = navigation.state.params;

    useEffect(() => {
        if (location.hasOwnProperty('coords')) {
            const params = {
                'latitude': location.coords.latitude,
                'longitude': location.coords.longitude,
                'codTipoCombustivel': combustivel.id,
                'dias': 1,
                'raio': 5
            }
            getPostos(params)            
        }
    }, [location])

    return (
        <View style={styles.postosList}>
            <Text style={styles.title}>
                {combustivel.desc} nas proximidades
            </Text>
            {postos && postos.map((posto, index) => <PostosItem key={index} posto={posto} />) ||
            <Text> Carregando...</Text>}
        </View>)
} 

const styles = StyleSheet.create({
    postosList: {
        width: "100%",
    }, 
    title: {
        textAlign: "center",
        fontWeight: "bold"
    }
})


const mapStateToProps = ({postos}) => postos
const mapDispatchToProps = dispatch => {
    return {getPostos: (params) => dispatch(getPostos(params))}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostosProximosList)