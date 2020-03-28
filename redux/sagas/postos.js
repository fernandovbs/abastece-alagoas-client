import { call, put } from "redux-saga/effects";
import { URI } from "../../helpers/uri";
import { types as postosTypes } from "../reducers/postos";

export const getPostosHandle = async (params, axios) => {
  return (
    axios
      .post(`${URI.getPostos}`, params)
      .then(res => res.data).catch(error => {console.log(error.message)})
  );
};

export function* getPostos(axios, { params }) {
  try {
    const postos = yield call(getPostosHandle, params, axios);
    yield put(setPostos(postos ? postos.slice(0, 10) : []));
  } catch (error) {
    console.log(error);
  }
}

export const setPostos = postos => ({
  type: postosTypes.set,
  postos
});
