import React, {Component} from 'react';
import Category from "./Category";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Monitoring</h1>
                </div>
                <Category/>
            </div>
        );
    }
}

export default App;
