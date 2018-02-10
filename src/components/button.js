import React from 'react';
import '../style/button.scss';

class Button extends React.Component{
    constructor(){
        super();
        this.Click = this.inputNumber.bind(this);
    }

    inputNumber(){
        console.log(this.props.value);
    }

    render(){
        return(
            <div className={"button button_"+this.props.value} onClick={this.Click}>{this.props.value}</div>   
        )
    }
}

export default Button;