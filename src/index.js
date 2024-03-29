import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header.component'
import Content from './components/content/conent.component'
import Total from './components/total/total.component'



const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
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
        ]
    };

    return (
        <div>
            <Header courseName={course.name} />
            <Content courseParts={course.parts}  />
            <Total courseParts={course.parts} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));