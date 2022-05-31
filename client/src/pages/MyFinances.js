import React, {useState} from 'react';
import '../styles/MyFinances.css'
import BudgetList from '../components/MyFinances/BudgetList';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';

const MyFinances = () =>  {
    const [budgetList, setBudgetList] = useState([])

    const getRecords = () => {
        axios.get('http://localhost:5000/records').then((response) => {
            console.log(response);
            setBudgetList(response.data)
        })
    }
    return(
        <>
        <div className='divFinances'>
        <button onClick={getRecords}>I'm the records list</button>
        <AddBoxIcon/>
        
        {budgetList.map((record) => {
            return <BudgetList concept={record.concept} amount={record.amount} dateOfRecord={record.dateOfRecord} typeOfRecord={record.typeOfRecord} category={record.category} />
        })}
        </div>
        </>
    )
}
export default MyFinances;