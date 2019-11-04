export const types = {
    get: 'bairros/get',
    set: 'bairros/set',
    reset: 'bairros/reset'
}

const initialState = {
    bairros: [],
    loaded: false,
    loading: false,
}

export default function bairros(state = initialState, action) {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                bairros: [],
                loading: true,
                loaded: false
            }

        case types.set:
            return {
                ...state,
                bairros: action.bairros,
                loading: false,
                loaded: true
            }

        case types.reset:
            return {
                ...state,
                loading: false,
                loaded: false
            }
    
        default:
            return state
    }
}