import React from 'react';
import Button from './button';
import times from 'lodash/times';
import '../style/keyboard.scss';

class Keyboard extends React.Component{
    render(){
        return(
            <div className="keyboard">
                {/* <div className="num_pad">
                    <Button value={"CE"} type="sign"/>
                    <Button value={"C"} type="sign"/>
                    <Button value={"<="} type="sign"/>
                    {times(10,(i)=>
                        <Button key={i} value={i} type="number"/>
                    )}
                    <Button value={"."} type="sign"/>
                    <Button value={"+/-"} type="sign"/>
                </div>
                <div className="op_pad">
                    <Button value={"+"} type="operator"/>
                    <Button value={"-"} type="operator"/>
                    <Button value={"*"} type="operator"/>
                    <Button value={"/"} type="operator"/>
                    <Button value={"="} type="operator"/>
                </div> */}
                    <Button value={"+"} type="operator"/>
                    <Button value={"-"} type="operator"/>
                    <Button value={"*"} type="operator"/>
                    <Button value={"/"} type="operator"/>
                    <Button value={"="} type="operator"/>
                    <div className="editpad">
                        <Button value={"CE"} type="edit"/>
                        <Button value={"C"} type="edit"/>
                        <Button value={"<="} type="edit"/>
                    </div>
                    <div className="numpad">
                    {times(10,(i)=>
                        <Button key={i} value={i} type="number"/>
                    )}
                    
                    <Button value={"+/-"} type="sign" style="sign1"/>
                    <Button value={"."} type="sign" style="sign2"/>
                    </div>

            </div>
        )
    }
}

export default Keyboard;