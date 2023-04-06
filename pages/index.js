import { Box, Button, Card, CardContent, CardActions, CircularProgress, Container, Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { background, eyYellow, white } from '../config/theme';
import { useGenerateHabit } from '../hooks/useGenerateHabit';
import InputAdornment from '@mui/material/InputAdornment';
import Fade from '@mui/material/Collapse';
import { CopyAll } from '@mui/icons-material';
import JSConfetti from 'js-confetti'
import { useEffect, useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Transition } from 'react-transition-group';



export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const generateHabit = useGenerateHabit();
  const onSubmit = data => generateHabit.mutate({ habit: data.habit });


  useEffect(() => {
  },[])

  useEffect(() => {
    if(generateHabit.isSuccess) {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        confettiNumber: 10,
      })
    }
  },[generateHabit.isSuccess])

  const copyHabit = () => {
    if(generateHabit.data) {
      setTooltipOpen(true);
      navigator.clipboard.writeText(generateHabit.data.data);
    }
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);


  const handleToolTipClose = () => {
    setTooltipOpen(false);
  };



  return (
    <>
      <Box bgcolor={background}>
        <Container>
          <Box p={3} mt={3} textAlign="center">
            <Typography color={white} variant="h3"><strong>Habit Stacker</strong></Typography>
            <Box mt={3} display="flex" justifyContent="center">
              <Typography variant='body1' color={eyYellow}>Generate habits from micro-behaviours!
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box display="flex" mt={5} justifyContent="center">
                  <TextField
                    color="info"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          🦄
                        </InputAdornment>
                      ),
                    }}
                    fullWidth label="Enter a micro-behaviour to turn into a habit" error={!!errors.habit} helperText={errors.habit ? "Please enter a habit" : ''} {...register("habit", { required: true })} />
                  <Box ml={1} display="flex" justifyContent="center" flexGrow={0}>
                    <Box flexGrow={0}>
                      <Button disabled={generateHabit.isLoading} type="submit" variant="contained" size="small">{generateHabit.isLoading ? <CircularProgress size={40} /> : 'Generate Habit'}</Button>

                    </Box>
                  </Box>
                </Box>
              </form>
            </Box>
          </Grid>
          <Grid item sm={3}></Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            {generateHabit.data && (
              <>
                <Box mb={3}>
                  <Typography>Your new habit is:</Typography>
                </Box>
                <Card>
                  <CardContent>
                    <Fade in>
                      <Box pl={4} pt={1} pb={1}>
                        <Typography variant="body1"><strong>{generateHabit.data.data}</strong></Typography>
                      </Box>
                    </Fade>
                  </CardContent>
                  <CardActions>
                    <ClickAwayListener onClickAway={handleToolTipClose}>
                    <Box pl={3} pb={1}>
                      <Tooltip arrow open={tooltipOpen} onClose={handleToolTipClose} title="Habit copied!" disableHoverListener disableFocusListener>
                        <IconButton color={white} onClick={copyHabit}>
                          <CopyAll color={white}></CopyAll>
                          <Typography variant="caption">Copy</Typography>
                        </IconButton>
                      </Tooltip>
                    </Box>
                    </ClickAwayListener>
                  </CardActions>
                </Card>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
