import React, {useRef, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {updateTodo} from "../redux/reducer/reducer";

function Update({match}) {

    //     변수   설정함수
    const [text, setText] = useState("");
    //const inputRef = useRef();
    const dispatch = useDispatch()
    const { todoId } = useParams();

    function onClickUpdate(){
        dispatch(updateTodo({todoId: parseInt(todoId), text}));
    }

    function onChangeText(e){
        const text = e.target.value;
        setText(text);
    }

    return (
        <div className='Update'>
            <h1>Update</h1>
            <input onChange={onChangeText} type="text"/>
            <Link to={`/`}>
                <button onClick={onClickUpdate}>수정 완료</button>
                <button>수정 취소</button>
            </Link>
        </div>
    )
}

export default Update