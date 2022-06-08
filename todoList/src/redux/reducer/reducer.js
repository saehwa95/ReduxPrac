//액션 타입
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const UPDATE_TODO = "UPDATE_TODO"
const GET_TODO = "GET_TODO"


//액션 크리에이터
export const addTodo = (payload) => {
  return {type : ADD_TODO, payload}
};

export const deleteTodo = (payload) => {
  return {type : DELETE_TODO, payload}
};


export const updateTodo = (payload) => {
  return {type : UPDATE_TODO, payload}
}

export const getTodo = (payload) => {
  return {type : GET_TODO, payload}
}

//초기값
const initialState = {
  todos: [],
};

//리듀서
const todos = (state = initialState, action) => {
  switch(action.type) {
        //왜 return () 아니고, {}?
    case ADD_TODO: return {...state, todos:[...state.todos, {id:state.todos.length+1, text:action.payload}]}

    case DELETE_TODO:
      console.log(action)
      // return() 아니고, {return 바로..~~ ?}
    return{...state, todos : state.todos.filter((todo)=>{return todo.id !== action.payload}),
    };

    case UPDATE_TODO : return {}

    case GET_TODO: return{...state}

    default:
      return state;
  }
};

export default todos;