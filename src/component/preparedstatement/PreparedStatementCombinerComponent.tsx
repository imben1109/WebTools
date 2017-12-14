import * as React from "react";
import { PreparedStatementCombinerHelper } from "./PreparedStatementCombinerHelper";
import { PreparedStatementCombinerStateType } from "./PreparedStatementCombinerStateType";

/**
 * React Component of Prepared Statement
 */
export class PreparedStatementCombinerComponent extends React.Component<{}, PreparedStatementCombinerStateType>{

    constructor(props){
        super(props);
        this.state = {
            preparedStatement : "",
            bindValues: "",
            combinedSql: ""
        }
    }

    onCombine(event){
        console.log(this.state.preparedStatement);
        console.log(this.state.bindValues);
        var combinedSql = PreparedStatementCombinerHelper.getCombinedSql(this.state.preparedStatement, this.state.bindValues);
        this.setState({
            combinedSql: combinedSql
        });
    }

    updatePreparedStatement(event){
        this.setState({
            preparedStatement: event.target.value
        });
    }

    updateBindValues(event){
        this.setState({
            bindValues: event.target.value
        });
    }
    
    render(){
        return (
            <div>
                <div>
                    <textarea value={this.state.preparedStatement} onChange={this.updatePreparedStatement.bind(this)} style={{width: 300, height: 100}}/>
                    <textarea value={this.state.bindValues} onChange={this.updateBindValues.bind(this)} style={{width: 300, height: 100}}/>
                    <button onClick={this.onCombine.bind(this)}>Combine</button>
                </div>
                <div>
                    <textarea value={this.state.combinedSql} disabled style={{width: 300, height: 100}}/>
                </div>
            </div>
        )
    }
}

