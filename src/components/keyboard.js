import React from 'react';
import Button from './button';
import times from 'lodash/times';

class Keyboard extends React.Component{
    render(){
        return(
            <div className="keyboard">
                <div className="num_pad">
                    {times(10,(i)=>
                        <Button key={i} value={i} type="number"/>
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