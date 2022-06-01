import React, { useState, useEffect } from 'react';
import Balance from "../components/Home/Balance";
import ListLastRecords from "../components/Home/ListOfRecords";
import axios from 'axios';

const Home = () => {
    const [budgetList, setBudgetList] = useState([])
    const [expense, setExpense] = useState(0)
    const [income, setIncome] = useState(0)

    const getRecords = () => {
        axios.get('http://localhost:5000/records').then((response) => {
            setBudgetList(response.data)
        })
    }

    useEffect(() =>{
        getRecords()
    },[])

    const calculateBalance = () => {
        let expenditure = 0;
        let earnings = 0;
        budgetList.map((value) => {
            value.typeOfRecord === 'expense'
            ? (expenditure = expenditure + value.amount)
            : (earnings = earnings + value.amount)
        })
        setExpense(expenditure)
        setIncome(earnings)
    }

    useEffect(() => calculateBalance(), [budgetList])
    return(
        <div className="home">
        <Balance expense={expense} income={income} />
        <ListLastRecords />
        View all movements
        </div>
    )
}
export default Home;