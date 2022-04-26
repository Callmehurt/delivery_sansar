import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Deliveries from "../pages/Deliveries";
import PartnerDashboard from '../components/partner/Dashboard';
import PartnerRecords from "./branch/partner/PartnerRecords";

const App = () => {
    return (
        <Router>
            <Routes>

                {/*Branch Routes*/}
                <Route path='/branch/dashboard' exact element={<Dashboard />} />
                <Route path='/branch/partners' exact element={<PartnerRecords />} />
                <Route path='/branch/deliveries' exact element={<Deliveries />} />


                {/*Partner Routes*/}
                <Route path='/partner/dashboard' exact element={<PartnerDashboard />} />

                <Route>404 Not Found</Route>
            </Routes>
        </Router>
    )
}

export default App;
