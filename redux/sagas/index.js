import { all, takeLatest, throttle } from "redux-saga/effects";
import { types as postosTypes } from "../reducers/postos";
import { types as combustiveisTypes } from "../reducers/combustiveis";
import { getPostos } from "../sagas/postos";
import { loadCombustiveis } from "../sagas/combustiveis";

import axios from "axios";

export default function* root() {
  yield all([
    takeLatest(postosTypes.get, getPostos, axios),
    takeLatest(combustiveisTypes.get, loadCombustiveis),
  ]);
}
