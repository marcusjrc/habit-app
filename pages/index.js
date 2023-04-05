import { Box, Button, Container, Divider, Paper, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useGenerateHabit } from './hooks/useGenerateHabit';


export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const generateHabit = useGenerateHabit();
  
  const onSubmit = data => generateHabit.mutate({habit: data.habit});

  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Paper>
          <Box p={3}>
        <Typography variant="h5">Enter a micro-behaviour you would like to turn into a habit</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" mt={5} justifyContent="center" alignItems="center">
            <TextField error={!!errors.habit} helperText={errors.habit ? "Please enter a habit" : ''} variant="outlined" type="text" {...register("habit", { required: true})}/>
            <Box ml={1} display="flex" justifyContent="center">          
              <Button disabled={generateHabit.isLoading} type="submit" variant="contained" size="small">Generate Habit</Button>
            </Box>
          </Box>
        </form>
        </Box>
        {generateHabit.data && <> <Divider></Divider><Box mt={5} pb={5} pr={3} pl={3}>
          <Typography>Your generated habit is:</Typography>
          <Typography variant="h6"><strong>{generateHabit.data.data}</strong></Typography>
          </Box></>}
        </Paper>
      </Box>
    </Container>
  )
}
