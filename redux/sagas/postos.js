import { call, put } from "redux-saga/effects";
import { URI } from "../../helpers/uri";
import { types } from "../reducers/postos";

export const getPostosHandle = async (location, axios) => {
  return (
    axios
      .request({
        method: "get",
        url: `${URI.getPostos(location)}`
      })
      .then(res => res.data)
  );
};

export function* getPostos(axios, { location }) {
  try {
    const { items } = yield call(getPostosHandle, location, axios);
    yield put(setPostos(items ? items.slice(0, 10) : []));
  } catch (error) {
    console.log(error);
  }
}

export const setPostos = postos => ({
  type: types.set,
  postos
});
