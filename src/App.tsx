import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { HomePage } from './Pages/Home'
import './App.css';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { InvalidPage } from "./Pages/Invalid";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/invalid' component={InvalidPage}></Route>
                <ProtectedRoute path='/' component={HomePage}/>
            </Switch>
        </Router>
    );
}

export default App;
