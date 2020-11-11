import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <h3>List</h3>
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
