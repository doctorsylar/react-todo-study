import React, {Component} from 'react';
import '../css/style.css';


class TodoHeading extends Component {
    render() {
        return (
            <div className="todo-heading">
                <div className="toggle-all-container">

                </div>
                <div className="task-input-container">

                </div>
            </div>
        )
    }
}
class TodoContent extends Component {
    render() {
        return (
            <div className="todo-content">

            </div>
        )
    }
}


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='todo-container'>
                <TodoHeading />
                <TodoContent />

            </div>
        )
    }
}

export default App;