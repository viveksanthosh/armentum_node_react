import React from 'react';
import NavBar from "./NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
export default ({ children }) => (
    <div class="row">
        <NavBar links={["Popular", "Latest"]} />
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-4">{children}</div>
            <div class="col-sm-2"></div>
        </div>
    </div>
)