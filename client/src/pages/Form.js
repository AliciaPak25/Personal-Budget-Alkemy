import React, { useState } from 'react';
import '../styles/Form.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import axios from 'axios';


const Form = () => {
    /* const { budget, status } = useSelector((state) => state.budget)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addRecord())
    },[]) */

    //select
    /* const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSelect = (event) => {
        handleChange(event);
        handleInputChange(event);
    }; */
    //submit section, all info sent to backend
  /*   const [newRecord, setNewRecord] = useState({
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
    } */

    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState(0);
    const [dateOfRecord, setDateOfRecord] = useState('');
    const [typeOfRecord, setTypeOfRecord] = useState('');
    const [category, setCategory] = useState('');
    //radio button
    const handleChange = (event) => {
        setTypeOfRecord(event.target.value);
        };
    
        const controlProps = (item) => ({
        checked: typeOfRecord === item,
        onChange: handleChange,
        value: item,
        name: 'typeOfRecord',
        inputProps: { 'aria-label': item },
        });
    //add function
    const addRecord = () => {
        axios.post('http://localhost:5000/create', {
        concept: concept, 
        amount: amount, 
        dateOfRecord: dateOfRecord, 
        typeOfRecord: typeOfRecord, 
        category: category,
        }).then(() => {
            console.log('success');
        })
    };
    
    return(
        <div className='divForm'>
            <form className='form'>
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
                onChange={(event) => {
                    setConcept(event.target.value);
                }}
                />
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Amount</legend>
                    <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Value</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        name='amount'
                        onChange={(event) => {
                            setAmount(event.target.value);
                        }}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        type='number'
                        className='inputWidth'
                    />
                    </FormControl>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Date</legend>
                    <TextField id="outlined-basic" label="" variant="outlined" placeholder="YYYY/MM/DD, example: 2022/05/30" className='inputWidth' onChange={(event) => {setDateOfRecord(event.target.value);}} name='dateOfRecord' />
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
                        <Radio {...controlProps('income')} color="success" />
                            {/* <input color="success" name='typeofRecord' onChange={(event)=>{setTypeOfRecord(event.target.value)}} value='income' type="radio"/> */}
                            <label>Income</label>
                        </div>
                        <div className='divRadio'>
                            {/*  <input
                                value='expense'
                                name='typeofRecord'
                                type="radio"
                            /> */}
                            <Radio
                                {...controlProps('expense')}
                                sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                }}
                            />
                            <label>Expense</label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Category</legend>
                    <FormControl sx={{ m: 1, width: 395 }}>
                        <InputLabel htmlFor="grouped-select">Select a category</InputLabel>
                        <Select id="grouped-select" label="Select a category" value={category} onChange={(event) => {setCategory(event.target.value)}} name='category'>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <ListSubheader>Income</ListSubheader>
                        <MenuItem value={'Salary'}>Salary</MenuItem>
                        <MenuItem value={'Freelance'}>Freelance</MenuItem>
                        <MenuItem value={'Investments'}>Investments</MenuItem>
                        <MenuItem value={'Extra Income'}>Extra Income</MenuItem>
                        <MenuItem value={'Christmas Bonus'}>Christmas Bonus</MenuItem>
                        <ListSubheader>Expenses</ListSubheader>
                        <MenuItem value={'Rent'}>Rent</MenuItem>
                        <MenuItem value={'Taxes'}>Taxes</MenuItem>
                        <MenuItem value={'Services'}>Services</MenuItem>
                        <MenuItem value={'Education'}>Education</MenuItem>
                        <MenuItem value={'Credit Card'}>Credit Card</MenuItem>
                        <ListSubheader>Other option</ListSubheader>
                        <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </fieldset>
                <button className="btn" onClick={addRecord}>
                    Done
                </button>
            </form>
           {/*  {status === 'success' ? (budget) : null}  */}
        </div>
    );
}

export default Form;