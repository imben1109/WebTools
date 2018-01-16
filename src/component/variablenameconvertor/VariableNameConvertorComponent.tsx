import { Component } from "react";
import * as React from "react";
import { VariableNameConvertorStateType } from "./VariableNameConvertorStateType";
import * as _ from 'lodash';
import { VariableNameConvertorUtil } from "./VariableNameConvertorUtil";
import { VariablenameConvertorTypeEnum } from "./VariableNameConvertorTypeEnum";

/**
 * Variable Name Convertor Component 
 */
export class VariableNameCovertorComponent extends Component<{}, VariableNameConvertorStateType>{

    constructor(props){
        super(props);
        this.state = {
            input: "",
            output: "",
            convertType: VariablenameConvertorTypeEnum.LOWER_CAMEL,
        }
    }

    updateInput(event){
        this.setState({
            input: event.target.value
        })
    }

    updateConvertType(event){
        this.setState({
            convertType: event.target.value
        });
    }

    convert(event){
        var output = VariableNameConvertorUtil.convert(this.state.input, this.state.convertType);
        this.setState({
            output: output
        });
    }

    render(){
        return (
            <div>
                <div>
                    <textarea value={this.state.input} onChange={this.updateInput.bind(this)} style={{width: 200, height: 100 }}/>
                    <button onClick={this.convert.bind(this)}>Convert</button>
                </div>
                <div>
                    <textarea value={this.state.output} style={{width: 200, height: 100 }} disabled/>
                </div>
                <div>
                    <input type="radio" name="convertType" value={VariablenameConvertorTypeEnum.LOWER_CAMEL} 
                        checked={this.state.convertType == VariablenameConvertorTypeEnum.LOWER_CAMEL} 
                        onChange={this.updateConvertType.bind(this)}/> To Lower Camel

                    <input type="radio" name="convertType" value={VariablenameConvertorTypeEnum.UPPER_CAMEL} 
                        checked={this.state.convertType == VariablenameConvertorTypeEnum.UPPER_CAMEL} 
                        onChange={this.updateConvertType.bind(this)}/> To Upper Camel

                    <input type="radio" name="convertType" value={VariablenameConvertorTypeEnum.UNDERSCORE}
                         checked={this.state.convertType == VariablenameConvertorTypeEnum.UNDERSCORE} 
                         onChange={this.updateConvertType.bind(this)}/> To Underscore (Upper Case)
                </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <b>Remark</b>
                    <pre>
                    This is used to convert words into different naming convention such as Upper Camel Case, Lower Camel Case or Underscore.
                    </pre>
                    <b>Lower Camel Case: </b><pre>abc_abc -> abcAbc</pre>
                </div>
            </div>
        )
    }
}