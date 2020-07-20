import { LOADING, HIDE_LOADING, HIDE_ITEMS, REQUESTS } from "./type"

export function loading() {
    return {
        type: LOADING
    }
}

export function hideLoading() {
    return {
        type: HIDE_LOADING
    }
}

export function getItems() {
    return {
        type: REQUESTS
    }
}

export function hideItems() {
    return {
        type: HIDE_ITEMS
    }
}