import { all, takeLatest, throttle } from "redux-saga/effects";
import { types as postosTypes } from "../reducers/postos";
import { getPostos } from "../sagas/postos";
import axios from "axios";

export default function* root() {
  yield all([
    takeLatest(postosTypes.get, getPostos, axios),
  ]);
}
