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
        })
    }
    return(
        <>
        <div className='divFinances'>
        <button></button>
        <AddBoxIcon/>
        <BudgetList concept="Entertainment" amount={200} dateOfRecord="2022/05/29" typeOfRecord="expense" category="Other" />
        </div>
        </>
    )
}
export default MyFinances;