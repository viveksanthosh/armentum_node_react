import React from 'react';
export default ({ title, content, img }) => (
    <div>
        <h1>{title}</h1>
        <img src = {img}/>
        <p> {content} </p>
    </div>
)