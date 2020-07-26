import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    

    render() { 
        return ( 
            <div>
                 <button onClick={this.props.onReset} className="btn btn-primary m-2">
                    Reset
                </button>
                {this.props.counters.map(counter =>(
                    <Counter
                        key={counter.id}
                        onIncrement={this.props.onIncrement}
                        onDelete={this.props.onDelete}
                        onReset={this.props.onReset}
                        counter={counter}
                    />))
                }

            </div>
         );
    }
}
 
export default Counters;
