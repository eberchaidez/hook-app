
const initialState = [{
  id: 1,
  todo: 'Comprar leche',
  done: false
}]

const toDoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'add':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

let todos = toDoReducer()

const newToDo = {
  id: 2,
  todo: 'Comprar pan',
  done: false
}

const addToDoAction = {
  type: 'add',
  payload: newToDo
}

todos = toDoReducer(todos, addToDoAction)

console.log(todos)
