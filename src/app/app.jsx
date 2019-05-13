import React, {Component} from 'react';
import '../css/style.css';


class TodoHeading extends Component {
    render() {
        return (
            <header className="todo-heading">
                <div className="toggle-all"></div>
                <div className="task-input-container">
                    <input type="text"
                           className="task-input"
                           placeholder="What needs to be done?"
                    />
                </div>
            </header>
        )
    }
}
function TodoItem(props) {
    return (
        <li className={ props.completed ? 'todo-item completed' : 'todo-item' } >
            <div className="completed-checkbox-container">
                <input
                    type="checkbox"
                    className="completed-checkbox"
                    checked={ props.completed }
                    onChange={ props.clickMark }
                    key={ props.taskId + '_chkbx' }
                />
            </div>
            <label className="todo-item-name">{ props.name }</label>
            <button className="todo-item-delete"></button>
        </li>
    );
}
class TodoContent extends Component {
    render() {
        if (this.props.tasks.length > 0) {
            let tasks = [];
            this.props.tasks.forEach(task => {
                tasks.push(
                    <TodoItem
                        taskId={ task['id'] }
                        key={ task['id'] }
                        name={ task['name'] }
                        completed={ task['completed'] }
                        clickMark={ this.props.clickMark }
                    />
                )
            });
            return (
                <section className="todo-content">
                    <ul className="todo-list">
                        { tasks }
                    </ul>
                </section>
            )
        }
        else {
            return null;
        }
    }
}
class TodoFooter extends Component {
    render() {
        if (this.props.show) {
            return (
                <footer className="todo-footer">

                </footer>
            )
        }
        else {
            return null;
        }
    }
}


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks
        }
    }
    clickMark = (event) => {
        console.log(event.target);
    };
    render() {
        return (
            <div className='todo-container'>
                <TodoHeading />
                <TodoContent
                    tasks={ this.state.tasks }
                    clickMark={ this.clickMark }
                />
                <TodoFooter show={ this.state.tasks.length > 0 ? true : false} />
            </div>

        )
    }
}

export default TodoApp;