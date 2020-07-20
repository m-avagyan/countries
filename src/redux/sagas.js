import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_ITEMS, REQUESTS } from './type'
import { loading, hideLoading } from './action'

export function* sagaWatch() {
    yield takeEvery(REQUESTS, sagaWork)
}

function* sagaWork() {
    yield put(loading())
    const payload = yield call(getItems)
    yield put({ type: GET_ITEMS, payload })
    yield put(hideLoading())
}

async function getItems() {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    return await response.json()
}