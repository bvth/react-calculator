import React from 'react';


class Button extends React.Component{
    constructor(){
        super();
        this.Click = this.inputNumber.bind(this);
        this.Move = this.mouseMove.bind(this);
        this.Clear = this.clearBackground.bind(this);
    }

    inputNumber(e){
        console.log(this.props.value);
        console.log(e.target.querySelector('div'));
    }

    mouseMove(e){
        let el = e.target; //select current element
        let top = el.getBoundingClientRect().top; //get offset top
        let left = el.getBoundingClientRect().left; //get offset left


        let bgColor; //background color
        let bColor; //border color

        if(el.getAttribute("class").includes("operator")){
            bgColor= "#c7efe5,#64d3b7";
            bColor= "#64d3b7,#c7efe5";
        }
        else{
            bgColor= "#d6d6d6,#9a9a9a";
            bColor= "#9a9a9a,#d6d6d6";
        }
        el.setAttribute("style","background: radial-gradient(at "+(e.clientX-left)+"px "+(e.clientY-top)+"px,"+bgColor+")!important; border: 1px solid; border-image: radial-gradient(at "+(e.clientX-left)+"px "+(e.clientY-top)+"px,"+bColor+"); border-image-slice: 30%;");
        
        
    }

    clearBackground(e){
        let el = e.target;
        el.removeAttribute("style");
    }

    render(){
        return(
            <div className={"button button_"+this.props.value+" "+this.props.type} 
                    onClick={this.Click}  
                    onMouseMove={this.Move}
                    onMouseOut={this.Clear}
                    style={{"gridArea":this.props.style}} >{this.props.value}</div>
        )
    }
}

export default Button;