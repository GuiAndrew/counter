import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
 constructor(props) {
   super(props);
   this.state = {
	count: 0
   };
 }

 handleIncrement = () => {
    const count = this.state.count;
    this.setState({count: count + 1});
 } 

 handleDecrement = () => {
    const count = this.state.count;
    if (count > 0) {
        this.setState({count: count - 1});
    }     
 } 

 render() {
     return(
        <div>
            <button onClick={this.handleIncrement}>
               +
            </button>
            <label>{ this.state.count }</label>
            <button onClick={this.handleDecrement}>
               -
            </button>
        </div>
     );
 } 
}
export default Counter;