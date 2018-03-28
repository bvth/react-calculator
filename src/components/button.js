import React from 'react';


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
            <div className={"button button_"+this.props.value+" "+this.props.type} onClick={this.Click}  style={{"gridArea":this.props.style}}>{this.props.value}</div>
        )
    }
}

export default Button;