import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="sm">
      
      <Typography variant="h4" gutterBottom>User List</Typography>
    <Button component={Link} to="/register" variant="contained" color="primary">Register</Button>
    <Container maxWidth="sm" sx={{ maxHeight: '400px', overflow: 'auto' }}>
   
      
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
        </List>
    
    </Container>
    </Container>
  );
};

export default Main;
