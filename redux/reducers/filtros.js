export const types = {
    get: 'filtros/get',
    set: 'filtros/set',
    reset: 'filtros/reset'
}

const initialState = {
    filtros: [],
    loaded: false,
    loading: false,
}

export default function filtros(state = initialState, action) {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                filtros: [],
                loading: true,
                loaded: false
            }

        case types.set:
            return {
                ...state,
                filtros: action.filtros,
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