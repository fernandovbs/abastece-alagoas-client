import { all, takeLatest, throttle } from "redux-saga/effects";
import { types as postosTypes } from "../reducers/postos";
import { types as combustiveisTypes } from "../reducers/combustiveis";
import { getPostos } from "../sagas/postos";
import { loadCombustiveis } from "../sagas/combustiveis";

import axios from "axios";
axios.defaults.headers.common['AppToken'] = '8b0a3c7823f6eb559b93a509deae1592dff3529b'
//axios.defaults.validateStatus = () => true
/*axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})
axios.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
})*/
export default function* root() {
  yield all([
    takeLatest(postosTypes.get, getPostos, axios),
    takeLatest(combustiveisTypes.get, loadCombustiveis),
  ]);
}
