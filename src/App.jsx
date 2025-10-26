// src/App.jsx
import { Button, Typography, Container } from '@mui/material';

function App() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to MUI + Vite + React 🚀
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}

export default App;
