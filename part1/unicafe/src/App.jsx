import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.percent}</td>
    </tr>
  )
}

const Statistics = ({goodStat,neutralStat,badStat,totalStat}) => {
  if (totalStat === 0) {
    return (
      <p>No feedback given yet</p>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <StatisticLine text="good" value={goodStat}/>
        <StatisticLine text="neutral" value={neutralStat}/>
        <StatisticLine text="bad" value={badStat}/>
        <StatisticLine text="total" value={totalStat}/>
        <StatisticLine text="average" value={(goodStat-badStat)/totalStat}/>
        <StatisticLine text="positive" value={(goodStat/totalStat)*100} percent={"%"}/>
      </table>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addToGood = () => {
    setGood(good + 1)
    setTotal(total+1)
  }

  const addToNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total+1)
  }

  const addToBad = () => {
    setBad(bad + 1)
    setTotal(total+1)
  }

  return (
    <div>
      <h2>Provide feedback</h2>
      <Button handleClick={addToGood} text="good" />
      <Button handleClick={addToNeutral} text="neutral" />
      <Button handleClick={addToBad} text="bad" />
      <Statistics goodStat={good} neutralStat={neutral} badStat={bad} totalStat={total}/>
    </div>
  )
}

export default App