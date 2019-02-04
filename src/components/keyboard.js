import React from 'react';
import { connect } from "react-redux";
import times from 'lodash/times';

import input from "../redux_actions/inputAction";

import Button from './button';
import '../style/keyboard.scss';

function mapStateToProps(state){
    return {
    }
}

class Keyboard extends React.Component{
    constructor(props){
        super(props);
    }
    input(e){
        e.prevenDefault();
        this.props.dispatch(input(e.target.value));
    }
    render(){
        return(
            <div className="keyboard">
                <div className="oppad">
                    <Button onClick={this.input} value={"+"} name={"plus"} type="operator"/>
                    <Button onClick={this.input} value={"-"} name={"minus"}type="operator"/>
                    <Button onClick={this.input} value={"*"} name={"multiply"} type="operator"/>
                    <Button onClick={this.input} value={"/"} name={"divide"} type="operator"/>
                    <Button onClick={this.input} value={"="} name={"equal"} type="operator"/>
                </div>
                <div className="editpad">
                    <Button onClick={this.input} value={"CE"} type="edit"/>
                    <Button onClick={this.input} value={"C"} type="edit"/>
                    <Button onClick={this.input} value={""} name={"delete"} type="edit"/>
                </div>
                <div className="numpad">
                    {times(9,(i)=>
                        <Button onClick={this.input} key={i} value={9-i} type="number" />
                    )}
                    
                    <Button onClick={this.input} value={"."} name={"separator"} type="sign" style="sign2"/>                    
                    <Button onClick={this.input} value={0} type="number" />                    
                    <Button onClick={this.input} value={"\u00B1"} name={"po_ne"} type="sign" style="sign1"/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Keyboard);