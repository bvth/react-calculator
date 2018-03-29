import React from 'react';


class Button extends React.Component{
    constructor(){
        super();
        this.Click = this.inputNumber.bind(this);
        this.Over = this.mouseMove.bind(this);
        this.Clear = this.clearBackground.bind(this);
    }

    inputNumber(){
        console.log(this.props.value);
    }

    mouseMove(e){
        let el = e.target; //select current element
        let top = el.getBoundingClientRect().top; //get offset top
        let left = el.getBoundingClientRect().left; //get offset left


        let bgColor;
        if(el.getAttribute("class").includes("operator")){
            bgColor= "#c7efe5,#64d3b7";
        }
        else{
            bgColor= "#ffffff,#9a9a9a"
        }
        el.setAttribute("style","background: radial-gradient(at "+(e.clientX-left)+"px "+(e.clientY-top)+"px,"+bgColor+")!important");
    }

    clearBackground(e){
        let el = e.target;
        el.removeAttribute("style");
    }

    render(){
        return(
            <div className={"button button_"+this.props.value+" "+this.props.type} 
                    onClick={this.Over}  
                    onMouseMove={this.Over}
                    onMouseOut={this.Clear}
                    style={{"gridArea":this.props.style}} >{this.props.value}</div>
        )
    }
}

export default Button;