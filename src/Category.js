import React, {Component} from 'react';
import './Category.css';
import Node from "./Node";

class Category extends Component {
    render() {
        return (
            <div className="Category">
                <h2>StudentBox</h2>
                <Node/>
            </div>
        );
    }
}

export default Category;
