import * as React from "react";
import { PreparedStatementCombinerStateType } from "./PreparedStatementCombinerStateType";
import { PreparedStatementCombinerUtil } from "./PreparedStatementCombinerUtil";

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
        var combinedSql = PreparedStatementCombinerUtil.getCombinedSql(this.state.preparedStatement, this.state.bindValues);
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
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <b>Remark</b>
                    <div>
                        <pre>This is used to combined binded value with prepared statement.</pre>
                        <br/>
                        <b>Prepared Statement</b>
                        <pre>
                            INSERT INTO TEST (COL1, COL2) VALUES (?, ?)
                        </pre>
                        <b>Binded Values</b>
                        <pre>
                            TEST(String), 1(Double)
                        </pre>
                        <b>Result</b>
                        <pre>
                            INSERT INTO TEST (COL1, COL2) VALUES ('TEST',  1)
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}

