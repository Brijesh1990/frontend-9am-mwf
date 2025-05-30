import React,{Component} from 'react'
import '../style.css'
class Counter extends Component
{
    constructor(props)
    {
        super(props);
        // initialize state 
        this.state={
            count:0
        };
    }

    // method to increments count
    increment =()=>{

        this.setState({count:this.state.count + 1});

    }
    
    // method to decrements count
    decrement =()=>{

        this.setState({count:this.state.count - 1});

    }
    // method to reset count
    reset =()=>{

        this.setState({count:0});

    }
    render()
    {
        return(
            <>
                <div className='app'>
                    <h1>Counter App</h1>
                    <hr align="left" />
                    <h2>The count values is : {this.state.count}</h2>
                    <button id='btn1' onClick={this.increment}>+</button>
                    <button id='btn2' onClick={this.decrement}>-</button>
                    <button id='btn3' onClick={this.reset}>Reset</button>
                </div>
            </>
        )
    }
}

export default Counter