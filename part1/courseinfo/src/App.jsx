const Header = (props) => {
  return (
    <div>
      <p>
        Course: {props.course.name}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        Part: {props.part.name} - Number of exercises: {props.part.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}



const Total = (props) =>{
  {/*let totalExercise = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)*/}
  return (
    <div>
      <p>
      Total # of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
    </div>
  )
}

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
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App