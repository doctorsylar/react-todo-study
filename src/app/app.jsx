import React, {Component} from 'react';
import '../css/style.css';

class TodoHeading extends Component {
    render() {
        return (
            <div className="heading">

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
            <div className='application-container'>
                <h1>My Cool Todo-React.js App!</h1>

            </div>
        )
    }
}

export default App;