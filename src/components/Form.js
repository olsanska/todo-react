import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.floor(Math.random() * 100)},
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <form>
            <div>
                <h3>Add</h3>
                <div className="input">
                    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                    <button onClick={submitTodoHandler} className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>
            </div>
            <div>
                <h3>Filter</h3>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    );
};

export default Form;
