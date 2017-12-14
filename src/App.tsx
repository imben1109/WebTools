import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link, MemoryRouter } from "react-router-dom";
import { Route } from "react-router";
import { PreparedStatementCombinerComponent } from "./component/preparedstatement/PreparedStatementCombinerComponent";

class App extends React.Component{
    
    render(){
        return (
            <MemoryRouter>
                <div>
                    <h1>Hello World</h1>
                    <ul>
                        <li><Link to="/">PreparedStatementCombiner</Link></li>
                    </ul>
                    <Route exact path="/" component={PreparedStatementCombinerComponent}/>
                </div>        
            </MemoryRouter>    
        )
    }

}


ReactDOM.render(<App />, document.getElementById('app'));

    
