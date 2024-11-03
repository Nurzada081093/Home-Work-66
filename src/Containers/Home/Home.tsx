import { Box, Button, Container, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IApiMeals, IMutation } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { toast } from 'react-toastify';
import Louder from '../../Components/UI/Louder/Louder.tsx';
import Cards from '../../Components/Cards/Cards.tsx';

const Home = () => {
  const [allMeals, setAllMeals] = useState<IMutation[]>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMeals = useCallback( async () => {
    try {
      setIsLoading(true);
      const response: {data: IApiMeals | null} = await axiosAPI<IApiMeals>('meals.json');
      const responseData = response.data;

      if (responseData === null) {
        setAllMeals([]);
        return;
      }

      if (responseData) {
        const mealsFromAPI = Object.keys(responseData).map((meal) => {
          const meals = {...responseData[meal]};

          return {
            ...meals,
            id: meal,
          };
        });

        const mealPrice: number = mealsFromAPI.reduce((acc, meal) => {
          acc += meal.calories;
          return acc;
        }, 0);

        setTotalCalories(mealPrice);
        setAllMeals(mealsFromAPI);
      }
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);

  const onDeleteClick = async (id: string) => {
    try {
      setIsLoading(true);
      await axiosAPI.delete(`meals/${id}.json`);
      await fetchMeals();
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <Louder/> :
        <Container sx={{marginTop: '50px'}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <Typography variant="h6" component="div">
              Total calories: <strong>{totalCalories} kcal</strong>
            </Typography>
            <Button type="button" variant="contained" to={"/meals/new"} component={NavLink} sx={{fontWeight: 'bold', width: '200px', height: '50px', textAlign: 'center'}}>
              <span>Add new meal</span>
            </Button>
          </Box>
          {allMeals.length <= 0 ?
            <Typography variant="h5" component="h2" sx={{margin: '15% 0', textAlign: 'center'}}>Your meal list is empty, please add something!</Typography>
            :
            <Cards meals={allMeals} isLoading={isLoading} onDeleteClick={onDeleteClick}/>
          }
        </Container>
      }
    </>
  );
};

export default Home;