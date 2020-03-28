import {types as combustiveisTypes} from './reducers/combustiveis'
import {types as postosTypes} from './reducers/postos'

export const getCombustiveis = _ => { return { type: combustiveisTypes.get }}
export const setCombustiveis = combustiveis => { return { type: combustiveisTypes.set, combustiveis }}
export const getPostos = params => { return { type: postosTypes.get, params: params }}
export const setPostos = postos => { return { type: postosTypes.set, postos }}

