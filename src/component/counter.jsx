import React, { Component } from 'react';

export default class Counter extends Component {
   
    styles = {
        fontSize: 30,
        fontWeight: 'bold'
    }
    
    render() { 
    
        return(
            <div>
                {/* <img className="m-2" src={this.state.imageUrl}></img> */}
               
                
                <span style={this.styles}
                    className={this.getbadge()}
                >
                    {this.formatCount()}
                </span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-bg m-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-bg m-2"
                >
                    Delete
                </button>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
        </div>
        )
    }

    getbadge() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const{value} = this.props.counter
        return value === 0 ? <h4>Zero</h4> : value        
    }
}
 
