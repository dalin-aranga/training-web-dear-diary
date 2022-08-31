import { createSlice } from "@reduxjs/toolkit";

const ToDotSlice = createSlice({
  name: "carts",
  initialState: {
    title: "",
    description: "",
    loading: false,
    todos: [],
  },
  reducers: {
    postAdded(state, action) {},

    loadPost(state, action) {
      state.loading = true;
    },
    savePost(state, action) {
      state.todos = action.payload;
    },
  },
});

export default ToDotSlice;
