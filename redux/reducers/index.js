import { combineReducers } from 'redux'
import combustiveis from './combustiveis'
import postos from './postos'
import cidades from './cidades'
import bairros from './bairros'
import filtros from './filtros'

export default combineReducers({
    combustiveis,
    postos,
    cidades,
    bairros,
    filtros
})