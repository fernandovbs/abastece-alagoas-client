export const types = {
    get: 'combustiveis/get',
    set: 'combustiveis/set',
    reset: 'combustiveis/reset'
}

const initialState = {
    combustiveis: [],
    loaded: false,
    loading: false,
}

export default function combustiveis(state = initialState, action) {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                combustiveis: [],
                loading: true,
                loaded: false
            }

        case types.set:
            return {
                ...state,
                combustiveis: action.combustiveis,
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