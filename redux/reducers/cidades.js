export const types = {
    get: 'cidades/get',
    set: 'cidades/set',
    reset: 'cidades/reset'
}

const initialState = {
    cidades: [],
    loaded: false,
    loading: false,
}

export default function cidades(state = initialState, action) {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                cidades: [],
                loading: true,
                loaded: false
            }

        case types.set:
            return {
                ...state,
                cidades: action.cidades,
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