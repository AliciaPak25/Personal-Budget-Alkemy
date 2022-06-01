import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Balance({expense, income}) {
  return (
    <Box sx={{ width: 275, marginTop: '2rem'}}>
      <Card variant="outlined" className='cardBalance'>
        <CardContent>
          <Typography variant="h5" component="div" className='balanceTitle'>
            Balance
          </Typography>
          <Typography variant="body2" className='number'>
            $ {income - expense}
          </Typography>
          <Typography component="div" className='balanceTitle'>
          Income <span>${income}</span>
          </Typography>
          <Typography component="div" className='balanceTitle'>
            Expense <span>${expense}</span>
          </Typography>
        </CardContent>
        <CardActions className='buttonAdd'>
          <Button size="medium"><AddCircleOutlineIcon className='addIcon'/></Button>
        </CardActions>
      </Card>
    </Box>
  );
}

