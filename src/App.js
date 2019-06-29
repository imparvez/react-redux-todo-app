import React, { useState } from 'react';
import { connect } from "react-redux";

import {
	addTodo,
	completed,
	deleteTodo
} from './actions/actionCreators'

import { Icon, Checkbox } from "antd";

import './App.css'

const App = props => {
	const [text, setText] = useState("");
	const [buttonType, setButtonType] = useState("Add");
	const [edit, setEdit] = useState({
		id: "",
		text: ""
	});
	return (
		<div className="App">
			<div id="wrapper">

				{/* ADD TODO */}
				<div className="add">
					<input
						type="text"
						value={text}
						placeholder="Type the todo and press enter..."
						onChange={e => setText(e.target.value)}
						onKeyUp={e => {
							// Key Up event for enter key
							if(e.keyCode === 13) {
								setText("");
								text && buttonType === "Add" && props.addTodo(text)
							}
						}}
					/>
					<button
						type="primary"
						onClick={() => {
							setText("")
							text && buttonType === "Add" && props.addTodo(text)
						}}
					>
						{buttonType}
					</button>
				</div>

				<div className="todos">
					{
						props.todos
							.map(todo => (
								<div
									className="todo"
									key={todo.id}
								>
									<span className="action">
										<Checkbox
											defaultChecked={todo.completed}
											onChange={e => {
												props.completed(todo.id)
											}}
										/>
									</span>
									<span
										style={{
											textDecoration: todo.completed
												? "line-through"
												: "none"
										}}
										className="text"
									>
										{todo.text}
									</span>
									<Icon type="edit" className="action edit" />
									<Icon type="delete" className="action delete" onClick={() => {
										props.deleteTodo(todo.id)
									}}/>
								</div>
							))
					}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	addTodo: value => dispatch(addTodo(value)),
	completed: value => dispatch(completed(value)),
	deleteTodo: value => dispatch(deleteTodo(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)

