import React, {Component} from 'react';
import './Category.css';
import Node from "./Node";

class Category extends Component {
    render() {
        let nodes = [
            {
                id: 2,
                name: 'Backend',
                isUp: true
            },
            {
                id: 3,
                name: 'Frontend',
                isUp: false
            }
        ];
        return (
            <div className="Category">
                <h2>{this.props.category.name}</h2>
                { nodes.map((node) => {
                    return <Node key={node.id} node={node}/>
                })}
            </div>
        );
    }
}

export default Category;
