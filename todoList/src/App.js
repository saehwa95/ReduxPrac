import React from "react";
import Todo from "./Component/Todo";
import Update from "./Component/Update";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes> 
          <Route path="/" element={<Todo />}></Route>
          <Route path="/Update" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App;
