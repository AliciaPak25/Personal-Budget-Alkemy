import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { currencyFormatter } from './utils';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import '../../styles/MyFinances.css';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function BudgetList({ id, concept, amount, dateOfRecord, typeOfRecord, category, deleteRecord }) {

    const [newConcept, setNewConcept] = useState('')
    
    const updateRecordConcept = (id) => {
        axios.put('http://localhost:5000/update', {concept: newConcept, id: id})
    }

    return (
        <div className='allListBudget'>
            {}
            <Box sx={{ minWidth: 600, marginBottom: '1em' }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {concept} {dateOfRecord}
                        </Typography>
                        <Typography variant="h5" component="div">
                        {currencyFormatter.format(amount)} 
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {typeOfRecord}
                        </Typography>
                        <Typography variant="body2">
                        {category}
                        </Typography>
                    </CardContent>
                <CardActions>
                    <IconButton edge="end" aria-label="delete">
                        <AddBoxIcon/>
                    </IconButton>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(event) => {setNewConcept(event.target.value)}}/>
                    <IconButton edge="end" aria-label="delete">
                        <a href={`http://localhost:5000/delete/${id}`}><EditIcon/></a>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => {deleteRecord(id)}}>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Box>
        </div>
    );
}