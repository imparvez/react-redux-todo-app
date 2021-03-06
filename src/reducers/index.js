import uuid from "uuid"

import {
    ADD_TODO,
    COMPLETED,
    DELETE_TODO,
    UPDATE_TODO,
} from '../actions/actionTypes'

const initialState = {
    todos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [
                    {
                        id: uuid.v1(),
                        text: action.payload,
                        completed: false
                    },
                    ...state.todos
                ]
            }
        case COMPLETED:
            const completedTodos = state.todos.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed}
                    : todo
            )
            return { ...state, todos: completedTodos }
        case DELETE_TODO:
            const deleteTodo = state.todos.filter(todo => todo.id !== action.payload)
            return { ...state, todos: deleteTodo }
        case UPDATE_TODO:
            const updatedTodo = state.todos.map(todo => 
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo    
            )

            return { ...state, todos: updatedTodo }
        default:
            return state
    }
}

export default rootReducer