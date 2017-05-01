import React, {Component} from "react";
import Category from "./Category";
import "./App.css";

class App extends Component {
    render() {
        let categories = [
            {
                id: '123',
                name: 'StudentBox'
            },
            {
                id: '999',
                name: 'Private'
            }
        ];

        return (
            <div className="App">
                <div className="App-header">
                    <h1>Monitoring</h1>
                </div>
                { categories.map((category) => {
                    return <Category key={category.id} category={category}/>
                })}
            </div>
        );
    }
}

export default App;
