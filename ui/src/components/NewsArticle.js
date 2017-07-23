import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
export default ({ title, content, img }) => (
    <div>
        <h3>{title}</h3>
        <img src = {img} align="middle"/>
        <br/>
        <p> {content} </p>
    </div>
)