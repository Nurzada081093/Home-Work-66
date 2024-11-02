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
          return {
            ...responseData[meal],
            id: meal,
          };
        });

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

  const onDeleteClick = (id: string) => {
    console.log(id);

  };

  const onEditClick = (id: string) => {
    console.log(id);
  };

  return (
    <>
      {isLoading ? <Louder/> :
        <Container sx={{marginTop: '50px'}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <Typography variant="h6" component="div">
              Total calories: <strong>0 kcal</strong>
            </Typography>
            <Button type="button" variant="contained" to={"/meals/new"} component={NavLink} sx={{fontWeight: 'bold', width: '200px', height: '50px', textAlign: 'center'}}>
              <span>Add new meal</span>
            </Button>
          </Box>
          <Cards meals={allMeals} isLoading={isLoading} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>
        </Container>
      }
    </>
  );
};

export default Home;