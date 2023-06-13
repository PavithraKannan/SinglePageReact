import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {
  const [quote, setQuote] = useState('');
  const handleRefreshClick = () => {
    window.location.reload(); 
  };

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/5');
        setQuote(response.data[0].quote);
      } catch (error) {
        console.error(error); 
      }
    };
    if(quote==='') {
      fetchQuote();
    }

  }, [quote]);

  return (
    <Card sx={{ minWidth: 300, minHeight:200, backgroundColor: '#ffcccc' }}>
    <div className="App">
      <h1 sx={{ fontColor: "blue"}}>Breaking Bad Quotes</h1>
      <p>{quote}</p>
      <CardActions>
        <Button variant="contained"  onClick={ () => setQuote('') } >Next</Button>
      </CardActions>
    </div>
    </Card>
  );
}
export default App;