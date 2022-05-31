import React, {useState} from 'react';
import '../styles/MyFinances.css'
import BudgetList from '../components/MyFinances/BudgetList';
import axios from 'axios';

const MyFinances = () =>  {
    const [budgetList, setBudgetList] = useState([])

    const getRecords = () => {
        axios.get('http://localhost:5000/records').then((response) => {
            setBudgetList(response.data)
        })
    }

    const deleteRecord = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
        setBudgetList(
            budgetList.filter((record) => {
            return record.id !== id
        }))
        })
    };
    return(
        <>
        <div className='divFinances'>
        <button onClick={getRecords}>I'm the records list</button>
        {budgetList.length === 0 ? (<>
        <h1>Oops! You don't have movements. Start creating your budget from the 'add to budget' section</h1>
        <button>Create a record</button>
        </>):
        budgetList.map((record) => {
            return <BudgetList key={record.id} id={record.id} concept={record.concept} amount={record.amount} dateOfRecord={record.dateOfRecord} typeOfRecord={record.typeOfRecord} category={record.category} deleteRecord={deleteRecord}/>
        })}
        </div>
        </>
    )
}
export default MyFinances;