export const types = {
    get: 'postos/get',
    set: 'postos/set',
    reset: 'postos/reset'
}

const initialState = {
    postos: [],
    loaded: false,
    loading: false,
}

export default function postos(state = initialState, action) {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                postos: [],
                loading: true,
                loaded: false
            }

        case types.set:
            return {
                ...state,
                postos: action.postos,
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