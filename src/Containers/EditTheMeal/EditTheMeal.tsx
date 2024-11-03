import CalorieTrackerForm from '../../Components/CalorieTrackerForm/CalorieTrackerForm.tsx';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import { IFormMeal } from '../../types';
import { toast } from 'react-toastify';

const EditTheMeal = () => {
  const [meal, setMeal] = useState<IFormMeal>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {idMeal} = useParams();

  const getTheMeal = useCallback( async (id: string) => {
    try {
      setIsLoading(true);
      const request = await axiosApi(`meals/${id}.json`);

      if (request.data) {
        setMeal(request.data);
      }
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      setIsLoading(false);
    }

  }, []);

  useEffect(() => {
    if (idMeal !== undefined) {
      void getTheMeal(idMeal);
    }

  }, [getTheMeal, idMeal]);


  const addNewMeal = async (meal: IFormMeal) => {
    try {
      setIsLoading(true);
      await axiosApi.put(`meals/${idMeal}.json`, {...meal});
      toast.success("The meal was edit successfully!");
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {meal !== undefined ?  <CalorieTrackerForm addNewMeal={addNewMeal} editMeal={meal} isMeal isLoading={isLoading}/> : null}
    </>
  );
};

export default EditTheMeal;