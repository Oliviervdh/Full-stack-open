import React from 'react';

const Total = (props) => (
    <div>
        <p> Number of exercises {props.courseParts[0].exercises + props.courseParts[1].exercises + props.courseParts[2].exercises } </p>
    </div>
);

export default Total;