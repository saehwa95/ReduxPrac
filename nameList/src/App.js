import React from "react";
import Main from "./Component/Main"
import Update from "./Component/Update"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Main />}></Route>
    {/* <Route path="/Update/:nameId" element={<Update />}></Route> */}
    <Route path="/Update" element={<Update />}></Route>
    </Routes>
    </>
  );
}

export default App;
