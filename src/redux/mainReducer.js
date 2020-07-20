import { GET_ITEMS, LOADING, HIDE_LOADING, HIDE_ITEMS } from "./type"

const initialState = {
    items: [],
    loading: true
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {...state, items: action.payload}
        case HIDE_ITEMS:
            return {...state, items: []}
        case LOADING:
            return {...state, loading: true}
        case HIDE_LOADING:
            return {...state, loading: false}
        default: return state
    }
}