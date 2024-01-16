import './App.css'
import Transactions from './Transactions'

function App() {

  const txns = [
    {
      date: "2019-11-25",
      amount: 12502,
      type: 0,
      balance: "$134040"
    },
    {
      date: "2019-11-20",
      amount: 100,
      type: 0,
      balance: "$134040"
    },
    {
      date: "2019-11-10",
      amount: 200,
      type: 1,
      balance: "$134040"
    },
    {
      date: "2019-11-12",
      amount: 1250,
      type: 0,
      balance: "$134040"
    },
    {
      date: "2019-11-12",
      amount: 5000,
      type: 1,
      balance: "$134040"
    },
  ]

  return (
    <Transactions txns={txns} />
  )
}

export default App
