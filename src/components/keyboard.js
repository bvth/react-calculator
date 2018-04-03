import React from 'react';
import Button from './button';
import times from 'lodash/times';
import '../style/keyboard.scss';

class Keyboard extends React.Component{
    render(){
        return(
            <div className="keyboard">
                <div className="oppad">
                    <Button value={"+"} name={"plus"} type="operator"/>
                    <Button value={"-"} name={"minus"}type="operator"/>
                    <Button value={"*"} name={"multiply"} type="operator"/>
                    <Button value={"/"} name={"divide"} type="operator"/>
                    <Button value={"="} name={"equal"} type="operator"/>
                </div>
                <div className="editpad">
                    <Button value={"CE"} type="edit"/>
                    <Button value={"C"} type="edit"/>
                    <Button value={""} name={"delete"} type="edit"/>
                </div>
                <div className="numpad">
                    {times(9,(i)=>
                        <Button key={i} value={9-i} type="number" />
                    )}
                    
                    <Button value={"."} name={"separator"} type="sign" style="sign2"/>                    
                    <Button value={0} type="number" />                    
                    <Button value={"\u00B1"} name={"po_ne"} type="sign" style="sign1"/>
                </div>
            </div>
        )
    }
}

export default Keyboard;