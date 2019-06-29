import {
	ADD_TODO,
	COMPLETED,
	DELETE_TODO,
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
	console.log(`deleteTodo => ${id}`)
	return {
		type: DELETE_TODO,
		payload: id
	}
}