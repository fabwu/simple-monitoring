import React, {Component} from "react";
import "./Node.css";

class Node extends Component {
    render() {
        return (
            <div className="Node">
                <h3>{this.props.node.name}</h3>
            </div>
        );
    }
}

export default Node;
