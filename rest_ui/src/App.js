import React,  {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const App = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try{
      const respnse = await axios.post ('http://localhost:8080/users', 
      {name: name});
      setMessage(respnse.data);
    }catch (error) {
      setMessage(error.respnse);
    }
  };

  return (
    <Container maxWidth="sm">
    <div>
    <Typography variant="h4" gutterBottom>Registration form</Typography>
      <form onSubmit={handleSubmit}>
  
       
        <TextField  id="standard-basic" label="Name" variant="standard"  type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      

        <Button variant="contained" color="primary" type="submit">Register</Button>
        {' '}<Button component={Link} to="/" variant="contained" color="primary">Main</Button>

      </form>
      {message && <p> id: {message.id} name: {message.name}</p>}
    </div>
    </Container>
  )
};
export default App;