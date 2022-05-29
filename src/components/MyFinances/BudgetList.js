import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { currencyFormatter } from './utils';

export default function BudgetList({ concept, amount, dateOfRecord, typeOfRecord, category}) {

    return (
        <div>
            <Box sx={{ minWidth: 275 }}>
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
                    <Button size="small">Learn More</Button>
                    <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
                </Card>
            </Box>
        </div>
    );
}