import { configureStore } from "@reduxjs/toolkit";
import ToDotSlice from "../features/TodoSlice.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    carts: ToDotSlice.reducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);
export default store;

//all done
