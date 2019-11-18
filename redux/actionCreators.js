import {types as combustiveisTypes} from './reducers/combustiveis'

export const getCombustiveis = _ => { return { type: combustiveisTypes.get }}
export const setCombustiveis = combustiveis => { return { type: combustiveisTypes.set, combustiveis }}

