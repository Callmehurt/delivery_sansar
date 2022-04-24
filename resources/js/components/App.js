import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Deliveries from "../pages/Deliveries";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/dashboard' exact element={<Dashboard />} />
                <Route path='/deliveries' exact element={<Deliveries />} />
                <Route>404 Not Found</Route>
            </Routes>
        </Router>
    )
}

export default App;
