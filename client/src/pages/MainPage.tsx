import { ToggleButton, ToggleButtonGroup } from '@mui/lab'
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'

import { CalculatorService } from '../services/CalculatorService.ts'
import { ExpressionParams } from '../services/CalculatorService.types.ts'

export const MainPage = () => {
  const [operand1, setOperand1] = useState<number>(0)
  const [operand2, setOperand2] = useState<number>(0)
  const [operator, setOperator] = useState<string>('+')
  const [result, setResult] = useState<number | string>('')

  const calculatorService = CalculatorService.getInstance()
  const handleExpression = async () => {
    if (operator) {
      const param = {
        operand1,
        operand2,
      }
      let method: ((param: ExpressionParams) => Promise<number>) | undefined = undefined
      switch (operator) {
        case '+':
          method = calculatorService.add.bind(calculatorService)
          break
        case '-':
          method = calculatorService.subtract.bind(calculatorService)
          break
        case '*':
          method = calculatorService.multiply.bind(calculatorService)
          break
        case '/':
          method = calculatorService.divide.bind(calculatorService)
          break
        default:
          break
      }
      if (method) {
        setResult('...')
        const res = await method(param).catch((e) => {
          setResult('')
          throw e
        })
        setResult(res)
      }
    } else {
      setResult('')
    }
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
        Blockchain Calculator
      </Typography>
      <Paper elevation={3} style={{ marginTop: '2rem', padding: '1rem' }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Operand 1"
              onChange={(e) => setOperand1(Number(e.target.value))}
              type="number"
              value={operand1}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <ToggleButtonGroup
              exclusive
              fullWidth
              onChange={(_, newOperator) => setOperator(newOperator)}
              value={operator}
            >
              <ToggleButton sx={{ fontSize: '1.2rem' }} value="+">
                +
              </ToggleButton>
              <ToggleButton sx={{ fontSize: '1.2rem' }} value="-">
                -
              </ToggleButton>
              <ToggleButton sx={{ fontSize: '1.2rem' }} value="*">
                *
              </ToggleButton>
              <ToggleButton sx={{ fontSize: '1.2rem' }} value="/">
                /
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Operand 2"
              onChange={(e) => setOperand2(Number(e.target.value))}
              type="number"
              value={operand2}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth onClick={() => handleExpression()} variant="contained">
              =
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h6">
              Result: {result}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
