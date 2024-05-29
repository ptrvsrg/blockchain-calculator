import { Button, Container, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <Container
      maxWidth="xs"
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Typography align="center" variant="h4">
        Error 404
      </Typography>
      <Paper elevation={3} style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center' }}>
        <Typography gutterBottom variant="body1">
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button color="primary" onClick={handleGoHome} variant="contained">
          Go to Home
        </Button>
      </Paper>
    </Container>
  )
}
