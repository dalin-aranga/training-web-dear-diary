// import { eventChannel } from "@redux-saga/core";

import { addDoc } from "firebase/firestore";
import ToDotSlice from "../features/TodoSlice";
import { all, takeEvery } from "redux-saga/effects";
import "firebase/firestore";

import colRef from "../utils/firebase";

function* WotchpostAdded({ payload: post }) {
  try {
    yield addDoc(colRef, post);
  } catch (error) {
    console.log(error);
  }
}

function* WotchloadPost({ payload: post }) {}

//done
export function* postSagas() {
  yield takeEvery(ToDotSlice.actions.postAdded, WotchpostAdded);
  yield takeEvery(ToDotSlice.actions.loadPost, WotchloadPost);
}

//done
export default function* rootSaga() {
  yield all([...postSagas()]);
}
