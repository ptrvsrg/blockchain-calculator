import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import ReactDOM from 'react-dom/client'

import { Router } from './routes/Router'

const theme = createTheme()

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={5}>
      <CssBaseline />
      <Router />
    </SnackbarProvider>
  </ThemeProvider>
)
