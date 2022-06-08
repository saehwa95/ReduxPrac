import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import{addTodo, deleteTodo} from "../redux/reducer/reducer"

const Todo = () => {

const data =useSelector((state)=>state.todos)
// console.log(data)

const dispatch = useDispatch()

const [text, setText] = useState("");


const onChange = (event) => {
  const { value } = event.target;
  setText(value);
}


const plus = (e) => {
  dispatch(addTodo(text))
}

const remove=(get)=>{
  dispatch(deleteTodo(get))
}


const list = data.map((value,index) => {
  return(
    <div key={index}>
    <h1><span>{value.id}{value.text}</span></h1>
    {/* <button onClick={()=>update()}>수정</button> */}
    <button onClick={()=>remove(value.id)}>삭제</button>
    <Link to ={`/Update`}>
    <button>수정</button>
    </Link>
    </div>
  )
})


  return (
    <>
    <h1>Todo</h1>
    <input type="text" onChange={onChange} value={text} />
    <button onClick={plus}>추가</button>
    {list}
    </>
  )
}

export default Todo;