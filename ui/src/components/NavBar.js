import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
export default ({ links }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#"></a>
      </div>
      <ul className="nav navbar-nav">
        {links.map(link => <li key={link}><Link to={'/' + link}>{link}</Link></li>)}
      </ul>
    </div>
  </nav>
)