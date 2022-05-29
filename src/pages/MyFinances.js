import React from 'react';
import '../styles/MyFinances.css'
import BudgetList from '../components/MyFinances/BudgetList';

const MyFinances = () =>  {
    return(
        <>
        <div className='divFinances'>
        <BudgetList concept="Entertainment" amount={200} dateOfRecord="2022/05/29" typeOfRecord="expense" category="Other" />
        </div>
        </>
    )
}
export default MyFinances;