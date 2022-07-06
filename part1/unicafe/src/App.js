import {useState} from "react";

const Title = (props) => <div> <h1>{props.text}</h1></div>

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad) / 3
    const positive = (props.good / props.bad) * 100 + " %"

    if(all === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <table>
            <tbody>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive + " %"} />
            </tbody>
        </table>

    )
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>

    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <Title text='give feedback' />
            <Button handleClick={() => {setGood(good + 1)}} text='good' />
            <Button handleClick={() => {setNeutral(neutral + 1)}} text='neutral' />
            <Button handleClick={() => {setBad(bad + 1)}} text='bad' />
            <Title text='statistics' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}
export default App;
