import React, { useEffect } from "react";
import CartList from "../features/cartList";
import AddForm from "../features/addForm";
import { onSnapshot } from "firebase/firestore";
import colRef from "../utils/firebase";
import { useDispatch } from "react-redux";
import ToDotSlice from "../features/TodoSlice";

function ToDoListPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    let arry = [];
    onSnapshot(colRef, (snapshot) => {
      arry = [];
      snapshot.docs.forEach((element) => {
        arry.push(element.data());
        console.log("arry", arry);
      });
      dispatch(ToDotSlice.actions.savePost(arry));
    });
  });
  return (
    <div className="App">
      <AddForm />
      <CartList />
    </div>
  );
}

export default ToDoListPage;
