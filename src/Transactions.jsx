import { useState } from "react"

const Transactions = ({ txns }) => {
  const [transactions, setTransactions] = useState(txns)
  const [date, setDate] = useState("2019-11-20")
  const [isFilterDisabled, setIsFilterDisabled] = useState(true)

  const handleDateChange = (e) =>{
    setDate(e.target.value)
    setIsFilterDisabled(false)
  }

  const filterTransactions = () =>{
    setTransactions(prevTransactions =>{
        return (
            prevTransactions.filter(txn =>{
                return txn.date === date
            })
        )
    })
  }

  const sortTransactions = () =>{
    setTransactions(prevTransactions =>{
        return (
            prevTransactions.sort((transactionA, transactionB) => transactionA.amount - transactionB.amount)
        )
    })
  }

  const transaction = transactions.map((txn, index) =>{
    return (
        <tr key={index}>
            <td>
                {txn.date}
            </td>
            <td>
                {txn.amount}
            </td>
            <td>
                {txn.type === 1 ? "Credit" : "Debit"}
            </td>
            <td>
                {txn.balance}
            </td>
        </tr>
    )
  })

  return (
    <>
    <div className="tabs">
        <input type="date" defaultValue={date} onChange={handleDateChange}  />
        <button disabled={isFilterDisabled} onClick={filterTransactions}>Filter</button>
        <button>Sort</button>
    </div>
      <table>
        <th>
          <td>Date</td>
          <td>Amount</td>
          <td>Type</td>
          <td>Balance</td>
        </th>

        {transaction}
      </table>
    </>
  );
}

export default Transactions