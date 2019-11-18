import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import Container from './layout/Container'
import { getCombustiveis } from './../redux/actionCreators'
import CombustiveisItem from './CombustiveisItem'

const CombustiveisList = ({combustiveis = [], getCombustiveis}) => {
    useEffect(() => {
        combustiveis.length === 0 && getCombustiveis()
    }, [])
    
    return (
        <Container>
            {combustiveis.map(combustivel => 
                <CombustiveisItem key={combustivel.id} combustivel={combustivel} /> 
            )}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const mapStateToProps = ({combustiveis = []}) => combustiveis
const mapDispatchToProps = dispatch => {
    return {getCombustiveis: () => dispatch(getCombustiveis())}
}

export default connect(mapStateToProps, mapDispatchToProps)(CombustiveisList)