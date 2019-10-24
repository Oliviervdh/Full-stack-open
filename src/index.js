import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header.component'
import Content from './components/content/conent.component'
import Total from './components/total/total.component'




const App = () => {
    const course = 'Half Stack application development';
    const parts = [{
        name: 'Fundamentals of React',
        exercises: 10
    },
     {
        name: 'Using props to pass data',
        exercises: 7
    },
     {
        name: 'State of a components',
        exercises: 14
    }
    ];

    const partsName = parts.map(part => part.name);
    const partsExercises = parts.map(part => part.exercises );

    console.log(partsName[0]);
    console.log(partsExercises[0]);



    return (
        <div>
            <Header course={course}/>
            <Content parts={parts} />
            <Total exercises1={partsExercises[0]} exercises2={partsExercises[1]} exercises3={partsExercises[2]}/>

        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));