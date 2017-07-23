import React from 'react';
import NavBar from "./NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
export default ({ children }) => (
    <div className="row">
        <NavBar links={["Popular", "Latest"]} />
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">{children}</div>
            <div className="col-sm-2"></div>
        </div>
    </div>
)