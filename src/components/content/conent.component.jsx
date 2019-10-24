import React from 'react';

import Part1 from './parts/part1.component'
import Part2 from './parts/part2.component'
import Part3 from './parts/part3.component'


const Content = (props) => {

        return(
            <div>
                <Part1 part1={props.courseParts[0].name} exercises1={props.courseParts[0].exercises} />
                <Part2 part2={props.courseParts[1].name} exercises2={props.courseParts[1].exercises} />
                <Part3 part3={props.courseParts[2].name} exercises3={props.courseParts[2].exercises} />
            </div>
        )
};



export default Content;
