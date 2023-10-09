import { ADD_TODO, REQUEST, STUDENT } from "./../../constants"
// Khởi tạo data
const initialState = {
  name: "toDo",
  todos: [
    { title: '7NM ' }
  ],
  // Khởi tạo data students
  requests: [
    {
      id: 1,
      title: 'Peraichi request',
      status: 'In progress',
      priority: 'Normal',
      confidential: '',
      requestedDate: '25/09/2023',
      deadline: '25/09/2023',
      note: '',
      content: 'Test',
    },
    {
      id: 2,
      title: '7NM request',
      status: 'Done',
      priority: 'Normal',
      confidential: '',
      requestedDate: '25/09/2023',
      deadline: '25/09/2023',
      note: '',
      content: 'Test',
    },
    {
      id: 3,
      title: 'Peraichi request 2',
      status: 'In progress',
      priority: 'Low',
      confidential: '',
      requestedDate: '25/09/2023',
      deadline: '25/09/2023',
      note: '',
      content: 'Test123456',
    },
  ]
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let todoNew = [...state.todos];
      todoNew.push(action.payload)
      return {
        ...state,
        todos: todoNew
      }
    case 'DELETE_TODO':
      console.log('DELETE_TODO')
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload.id)
      return {
        ...state,
        todos: updatedTodos
      }
    case 'UPDATE_TODO':
      console.log('UPDATE_TODO')
      const updatedTodoList = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            name: action.payload.name,
            completed: action.payload.completed
          }
        } else {
          return todo
        }
      })
      return {
        ...state,
        todos: updatedTodoList
      }
    // Start xử lý phần student
    case REQUEST.REQUEST_ADD:
      let requests = [...state.requests];
      requests.push(action.payload)
      return {
        ...state,
        requests: requests
      }

    case REQUEST.REQUEST_EDIT:
      const updateRequest = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            completed: action.payload.completed
          }
        } else {
          return todo
        }
      })
      return {
        ...state,
        todos: updateRequest
      }

    case REQUEST.REQUEST_DELETE:
      const updatedRequests = state.requests.filter(todo => todo.id !== action.payload.id)
      return {
        ...state,
        requests: updatedRequests
      }
    // end xử lý phần student  
    default:
      return state
  }
}