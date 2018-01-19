import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link, MemoryRouter } from "react-router-dom";
import { Route } from "react-router";
import { PreparedStatementCombinerComponent } from "./component/preparedstatement/PreparedStatementCombinerComponent";
import { VariableNameCovertorComponent } from "./component/variablenameconvertor/VariableNameConvertorComponent";

class App extends React.Component{
    
    render(){
        return (
            <MemoryRouter>
                <div>
                    <h1>Web Tools</h1>
                    <ul>
                        <li><Link to="/">PreparedStatementCombiner</Link></li>
                        <li><Link to="/VariableNameConvertor">VariableNameConvertor</Link></li>
                    </ul>
                    <Route exact path="/" component={PreparedStatementCombinerComponent}/>
                    <Route path="/VariableNameConvertor" component={VariableNameCovertorComponent}/>
                </div>        
            </MemoryRouter>    
        )
    }

}


ReactDOM.render(<App />, document.getElementById('app'));

    
