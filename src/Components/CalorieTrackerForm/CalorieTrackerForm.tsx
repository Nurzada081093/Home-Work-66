import FormControl from '@mui/material/FormControl';
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { mealsTime } from '../../Constantas.ts';
import React, { useState } from 'react';
import { IFormMeal } from '../../types';
import { toast } from 'react-toastify';
import ButtonLoadingStyle from '../UI/ButtonLoadingStyle/ButtonLoadingStyle.tsx';

const MEALS_TIME = mealsTime;

const initialMeal = {
  time: '',
  description: '',
  calories: 0,
};

interface IProps {
  addNewMeal: (meal:IFormMeal) => void;
  isLoading?: boolean;

}

const CalorieTrackerForm: React.FC<IProps> = ({addNewMeal, isLoading}) => {
  const [newMeal, setNewMeal] = useState<IFormMeal>(initialMeal);

  const onChange = (e: SelectChangeEvent<string> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMeal((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmitMeal = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newMeal.time.trim().length === 0 || newMeal.description.trim().length === 0 || newMeal.calories <= 0) {
      toast.error("Заполните все поля и значение калория должно быть больше 0!");
    } else {
      addNewMeal({
        ...newMeal,
        calories: Number(newMeal.calories),
      });
    }


  };


  return (
    <>
      <Container>
        <Typography variant="h3" sx={{ textAlign: 'center', color: 'black', padding: '20px 0', fontWeight: 0 }}>
          Add new meal
        </Typography>
        <form onSubmit={onSubmitMeal} style={{ border: '1px solid lightgrey', width: '70%', margin: '0 auto 70px', padding: '50px 0', borderRadius: '20px', backgroundColor: 'white' }}>
          <Grid container spacing={2} sx={{ mx: 'auto', width: '80%' }}>
            <Grid size={12}>
              <FormControl sx={{ width: '100%'}}>
                <InputLabel id="demo-simple-select-label">Meal time</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-label"
                  name="time"
                  value={newMeal.time}
                  onChange={onChange}
                  input={<OutlinedInput label="Meal time"/>}
                  variant="outlined"
                >
                  <MenuItem value="" disabled>Select meal time!</MenuItem>
                  {MEALS_TIME.map((mealTime) => (
                    <MenuItem key={mealTime.id} value={mealTime.id}>{mealTime.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={12}>
              <TextField
                sx={{ width: '100%' }}
                id="outlined-basic"
                label="Meal description"
                name="description"
                variant="outlined"
                value={newMeal.description}
                onChange={onChange}
              />
            </Grid>
            <Grid size={12}>
              <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextField
                  sx={{ width: '90%' }}
                  id="outlined-basic"
                  label="Calories"
                  name="calories"
                  variant="outlined"
                  type="number"
                  value={newMeal.calories}
                  onChange={onChange}
                />
                <Typography variant="h6" component="h2" sx={{marginLeft: '20px'}}><strong>ckal</strong></Typography>
              </Box>
            </Grid>
            <Grid size={12}>
              <Button type="submit" variant="contained" sx={{fontWeight: 'bold', width: '200px', height: '50px', textAlign: 'center'}}>
                <span>Add new meal</span>
                {isLoading ? <ButtonLoadingStyle/> : null}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default CalorieTrackerForm;