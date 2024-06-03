import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ParentDashboard from './ParentDashboard';
import StaffDashboard from './StaffDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/parent-dashboard" component={ParentDashboard} />
                <Route path="/staff-dashboard" component={StaffDashboard} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
