import React from 'react';
import Display from './display';
import Keyboard from './keyboard';

class Calculator extends React.Component{
    render(){
        return (
            <div className="calculator">
                <Display/>
                <Keyboard/>
            </div>
        )
    }
}

export default Calculator;