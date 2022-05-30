import React, { useState, useEffect } from 'react';
import '../styles/Form.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import { addRecord } from '../redux/actions/budgetActions';
import { useSelector, useDispatch } from 'react-redux';

const Form = () => {
    const { budget, status } = useSelector((state) => state.budget)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addRecord())
    },[])

    //select
    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSelect = (event) => {
        handleChange(event);
        handleInputChange(event);
    };
    //submit section, all info sent to backend
    const [newRecord, setNewRecord] = useState({
        concept: '',
        amount: 0,
        dateOfRecord: '',
        typeOfRecord: '',
        category: '', 
        from: "form-budget"
    })

    const handleInputChange = (event) => {
        setNewRecord({
            ...newRecord,
            [event.target.name]: event.target.value
        })
    } 

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        await setNewRecord({concept: '',
        amount: 0,
        dateOfRecord: '',
        typeOfRecord: '',
        category: '', 
        from: "form-budget"})
    }
    
    return(
        <div className='divForm'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='titleOfForm'>Add an income or an expense to your budget</h2>
                <fieldset className='fieldset'>
                <legend className='legend'>Concept</legend>
                <TextField
                id="outlined-textarea"
                label="Concept"
                placeholder="How do you want to identify your income/expense?"
                multiline
                className='inputWidth'
                autoFocus
                name='concept'
                onChange={handleInputChange}
                />
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Amount</legend>
                    <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Value</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        name='amount'
                        onChange={handleInputChange}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        type='number'
                        className='inputWidth'
                    />
                    </FormControl>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Date</legend>
                    <TextField id="outlined-basic" label="" variant="outlined" placeholder="YYYY/MM/DD, example: 2022/05/30" className='inputWidth' onChange={handleInputChange} name='dateOfRecord' />
                    {/* <DatePicker
                    selected={startDate} 
                    onChange={handleDate}
                    name='dateOfRecord'
                    dateFormat="yyyy/MM/dd" 
                    minDate={new Date('1900/03/01')}
                    maxDate={new Date('2030/06/01')}
                    /> */}
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Type</legend>
                    <div className='divRadios'>
                        <div className='divRadio'>
                            <input color="success" name='typeofRecord' onChange={handleInputChange} value='income' type="radio"/>
                            <label>Income</label>
                        </div>
                        <div className='divRadio'>
                            <input
                                value='expense'
                                onChange={handleInputChange}
                                name='typeofRecord'
                                type="radio"
                            />
                            <label>Expense</label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Category</legend>
                    <FormControl sx={{ m: 1, width: 395 }}>
                        <InputLabel htmlFor="grouped-select">Select a category</InputLabel>
                        <Select id="grouped-select" label="Select a category" value={newRecord.category} onChange={handleSelect} name='category'>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <ListSubheader>Income</ListSubheader>
                        <MenuItem value={1}>Salary</MenuItem>
                        <MenuItem value={2}>Freelance</MenuItem>
                        <MenuItem value={3}>Investments</MenuItem>
                        <MenuItem value={4}>Extra Income</MenuItem>
                        <MenuItem value={5}>Christmas Bonus</MenuItem>
                        <ListSubheader>Expenses</ListSubheader>
                        <MenuItem value={6}>Rent</MenuItem>
                        <MenuItem value={7}>Taxes</MenuItem>
                        <MenuItem value={8}>Services</MenuItem>
                        <MenuItem value={9}>Education</MenuItem>
                        <MenuItem value={10}>Credit Card</MenuItem>
                        <ListSubheader>Other option</ListSubheader>
                        <MenuItem value={11}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </fieldset>
                <button className="btn" type='submit'>
                    Done
                </button>
            </form>
            {status === 'success' ? (budget) : null} 
        </div>
    );
}

export default Form;