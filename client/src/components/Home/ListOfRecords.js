import * as React from 'react';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import axios from 'axios';

export default function ListLastRecords() {
  const [lastTenRecords, setLastTenRecords] = useState([])

  const getLastTenRecords = () => {
    axios.get('http://localhost:5000/records').then((response) => {
        setLastTenRecords(response.data.slice(-10))
    })
  }
  
  useEffect(() =>{
      getLastTenRecords()
  },[])

  return (

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {lastTenRecords.length === 0 ? (<p>Oops! You don't have movements</p>) : lastTenRecords.map((val) => {
        return  <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={val.concept} secondary={val.amount} />
      </ListItem>
      </> 
})}
    </List>

  );
}
