import React from 'react'
import Headers from "./Header"
import Content from './Content'

const Course = (props) => {
    const {course} = props
    const parts = course.parts

    return(
        <div>
            <Headers name={course.name}/>
            <Content parts={parts}/>
        </div>
    )
    
}

export default Course