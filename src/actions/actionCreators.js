import {
	ADD_TODO,
	COMPLETED,
	DELETE_TODO,
	UPDATE_TODO,
} from './actionTypes'

export const addTodo = todo => ({
	type: ADD_TODO,
	payload: todo
});

export const completed = id => {
	return {
		type: COMPLETED,
		payload: id
	}
};

export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id
	}
}

export const updateTodo = (id, text) => {
	return {
		type: UPDATE_TODO,
		payload: {
			id,
			text
		}
	}
}