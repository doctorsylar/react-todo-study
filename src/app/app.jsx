import React, {Component} from 'react';
import '../css/style.css';


class TodoHeading extends Component {
    render() {
        return (
            <header className="todo-heading">
                <div className="toggle-all-container"></div>
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
class TodoContent extends Component {
    render() {
        if (this.props.tasks.length > 0) {
            return (
                <section className="todo-content">

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
    render() {
        return (
            <div className='todo-container'>
                <TodoHeading />
                <TodoContent tasks={ this.state.tasks }/>
                <TodoFooter show={ this.state.tasks.length > 0 ? true : false} />
            </div>

        )
    }
}

export default TodoApp;