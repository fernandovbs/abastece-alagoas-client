import { call, put } from "redux-saga/effects";
import { setItem, getItem } from "./../../helpers/storage"
import { setCombustiveis } from './../actionCreators'

const getCombustiveis = async () => {
    let combustiveis = await getItem('combustiveis')

    if (combustiveis === null) {
        combustiveis = [
            {id: 1, desc: 'Gasolina comum'}, 
            {id: 2, desc: 'Gasolina aditivada'},
            {id: 3, desc: 'Álcool'},
            {id: 4, desc: 'Diesel comum'},
            {id: 5, desc: 'Diesel aditivado'},
            {id: 6, desc:  'Gás natural (GNV)'}
        ]
        setItem('combustiveis', combustiveis)    
    }
    
    return combustiveis
}

export function* loadCombustiveis() {
    const combustiveis = yield call(getCombustiveis)
    yield put(setCombustiveis(combustiveis))
}

