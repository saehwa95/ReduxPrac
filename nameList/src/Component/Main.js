import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../redux/modules/reducer";


const Main = () => {

  const data = useSelector((state)=>state.names)



  const dispatch = useDispatch()


  const [text, setText] = useState("")

  const onChange = (event) => {
    const {value} = event.target;
    setText(value)
  }

  const plus = (e) => {
    dispatch(addName(text))
  }

  const list = data.map((value,index) => {
    return (
      <div key={index}>
        <h1>{value.id}.{value.text}</h1>
      </div>
    )
  })


  return(
  <>
  <h1>출석부</h1>
  <input type="text" onChange={onChange} value={text}/>
  <button onClick={plus}>저장</button>
  {list}
  </>
)
}

export default Main;