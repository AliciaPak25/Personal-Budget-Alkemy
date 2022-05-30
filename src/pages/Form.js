import React, { useState } from 'react';
import '../styles/Form.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import SelectCategory from '../components/Form/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [values, setValues] = useState({
        amount: '',
        });

    const ChangeAmount = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return(
        <div className='divForm'>
            <form className='form' action="/records/add">
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
                />
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Amount</legend>
                    <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Value</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={ChangeAmount('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        type='number'
                        className='inputWidth'
                    />
                    </FormControl>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Date</legend>
                    {/* <TextField id="outlined-basic" label="" variant="outlined" placeholder="YYYY/MM/DD" className='inputWidth' /> */}
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy/MM/dd" minDate={new Date('1900/03/01')}
                    maxDate={new Date('2030/06/01')}/>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Type</legend>
                    <div className='divRadios'>
                        <div className='divRadio'>
                            <Radio {...controlProps('c')} color="success" />
                            <p>Income</p>
                        </div>
                        <div className='divRadio'>
                            <Radio
                                {...controlProps('e')}
                                sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                }}
                            />
                            <p>Expense</p>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='legend'>Category</legend>
                    <SelectCategory/>
                </fieldset>
                <button className="btn" >
                    Done
                </button>
            </form>
        </div>
    );
}
export default Form;