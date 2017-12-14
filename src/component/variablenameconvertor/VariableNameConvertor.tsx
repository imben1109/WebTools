import { Component } from "react";
import * as React from "react";
import { VariableNameConvertorStateType } from "./VariableNameConvertorStateType";
import * as _ from 'lodash';

export class VariableNameCovertor extends Component<{}, VariableNameConvertorStateType>{

    constructor(props){
        super(props);
        this.state = {
            input: "",
            output: ""
        }
    }

    updateInput(event){
        this.setState({
            input: event.target.value
        })
    }

    convert(event){
        var output = "";
        var lines = this.state.input.split("\n");
        for (var i=0; i<lines.length; i++){
            var line = lines[i];
            var words = line.split(" ");
            for (var j=0; j<words.length; j++){
                var word = words[j];
                output += _.camelCase(word) + " ";
            }
            output += "\n";
        }
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
            </div>
        )
    }
}