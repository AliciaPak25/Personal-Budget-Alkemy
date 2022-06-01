import React, { useState, useEffect } from 'react';
import '../styles/MyFinances.css'
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { currencyFormatter } from '../components/MyFinances/utils';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';

const MyFinances = () =>  {
    const [budgetList, setBudgetList] = useState([])
    const [newConcept, setNewConcept] = useState('')
    const [newAmount, setNewAmount] = useState(0)
    const [newDateOfRecord, setNewDateOfRecord] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [editing, setEditing] = useState(false)

    const getRecords = () => {
        axios.get('http://localhost:5000/records').then((response) => {
            setBudgetList(response.data)
        })
    }
    useEffect(() =>{
        getRecords()
    },[])
    const updateRecord = (id) => {
        axios.put(`http://localhost:5000/update/${id}`, {
        concept: newConcept,
        amount: newAmount,
        dateOfRecord: newDateOfRecord,
        category: newCategory,
        id: id
        }).then(() => {
            setBudgetList(budgetList.map((record) => {
                return record.id === id ? {
                    id: record.id,
                    concept: newConcept,
                    amount: newAmount,
                    dateOfRecord: newDateOfRecord,
                    category: newCategory} : record
            }))
            })
    }
    const modifyingRecord = (id) => {
        if(editing){
          setEditing(false)
          updateRecord(id)
        }else{
          setEditing(true)
        }
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
        {budgetList.length === 0 ? (<>
        <h1>Oops! You don't have movements. Start creating your budget from the 'add to budget' section</h1>
        {/* <button>Create a record</button> */}
        </>):
        budgetList.map((record) => {
            return <div key={record.id}>
                <Box sx={{ minWidth: 400, marginBottom: '1em', marginTop: '1em' }}>
                <Card variant="outlined">
                    <CardContent>
                    {!editing ?
                        (<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {record.concept}
                        </Typography>
                        ) : <TextField id="outlined-basic" placeholder='Concept' label="Concept" variant="outlined" onChange={(event) => {setNewConcept(event.target.value)}}/>
                    }
                    {!editing ?
                        (<Typography variant="h5" component="div">
                        {currencyFormatter.format(record.amount)} 
                        </Typography>
                        ) : <TextField id="outlined-basic" placeholder='Amount' type="number" label="Amount" variant="outlined" onChange={(event) => {setNewAmount(event.target.value)}}/>
                    }
                    {!editing ?
                        (<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {record.dateOfRecord}
                        </Typography>
                        ) : <TextField id="outlined-basic" placeholder='Ex: 2022/06/01 y/m/d' label="Date" variant="outlined" onChange={(event) => {setNewDateOfRecord(event.target.value)}}/>
                    }
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {record.typeOfRecord} 
                        </Typography>
                    {!editing ?
                        (<Typography variant="body2">
                        {record.category}
                        </Typography>
                        ) : <>
                        <FormControl sx={{ m: 1, width: 395 }}>
                        <InputLabel htmlFor="grouped-select">Select a category</InputLabel>
                        <Select id="grouped-select" label="Select a category" value={newCategory} onChange={(event) => {setNewCategory(event.target.value)}}>
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
                    </>
                    }
                    </CardContent>
                <CardActions>
                    {/* <IconButton edge="end" aria-label="delete">
                        <AddBoxIcon/>
                    </IconButton> */}
                    <IconButton edge="end" onClick={() => {modifyingRecord(record.id)}}>
                    {!editing ? (<EditIcon/>) : <CheckCircleIcon/>}
                    </IconButton>
                    {editing ?
                    (<CancelIcon id={record.id} onClick={()=> setEditing(false)}/>) : 
                    <IconButton edge="end" aria-label="delete" onClick={() => {deleteRecord(record.id)}}>
                        <DeleteIcon/>
                    </IconButton>
                    }
                </CardActions>
                </Card>
            </Box>
            </div>
        })}
        </div>
        </>
    )
}
export default MyFinances;