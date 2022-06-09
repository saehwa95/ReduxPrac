//액션
const ADD_NAME = "ADD_NAME"

// 액션 크리에이터
export const addName = (payload) =>{
  return {type : ADD_NAME, payload}
}

//초기값
const initialState = {
  names : [],
}

//리듀서

const names = (state = initialState, action) => {
  switch(action.type){

    case ADD_NAME : return{...state, names : [...state.names, {id : state.names.length + 1, text : action.payload}]}


    default :
    return state;
  }
}

export default names;