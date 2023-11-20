import Header from './Header'
import Part from './Part'
import Total from './Total';


const Course = ({ course }) => {

    const { name, parts } = course;

    return (
        <div>
            <Header name={name} />
            {parts.map((part) => {
                return <Part key={part.id} part={part.name} exercises={part.exercises} />
            })}
            
            <Total exerciseTotal={parts}/>
        </div>
    )
}

export default Course;