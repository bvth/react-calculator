import React from 'react';
import Button from './button';
import times from 'lodash/times';

class Keyboard extends React.Component{
    render(){
        const renderButton =(i) =>{
           switch(i){
                case 10:
                    return <Button key={i} value={"+/-"} type="sign"/>
                    break;
                case 11:
                    return <Button key={i} value={"."} type="sign"/>;
                    break;
                default: 
                    return <Button key={i} value={i} type="number"/>;
                    break;
           }
        }
        return(
            <div className="keyboard">
                <div className="num_pad">
                    {times(12,(i)=>
                        renderButton(i)
                    )}
                </div>
                <div className="op_pad">
                    <Button value={"+"} type="operator"/>
                    <Button value={"-"} type="operator"/>
                    <Button value={"*"} type="operator"/>
                    <Button value={"/"} type="operator"/>
                    <Button value={"="} type="operator"/>
                </div>
            </div>
        )
    }
}

export default Keyboard;