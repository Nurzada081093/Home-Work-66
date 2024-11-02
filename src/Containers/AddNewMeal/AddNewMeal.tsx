import CalorieTrackerForm from '../../Components/CalorieTrackerForm/CalorieTrackerForm.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axiosAPI from '../../axiosAPI.ts';
import { ApiNewMeal } from '../../types';

const AddNewMeal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const addNewMeal = async (meal: ApiNewMeal) => {
    try {
      setIsLoading(true);
      await axiosAPI.post(`meals.json`, meal);
      navigate('/');
      toast.success("The meal was added successfully!");
    } catch (e) {
      toast.error(`${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <CalorieTrackerForm addNewMeal={addNewMeal} isLoading={isLoading}/>
    </>
  );
};

export default AddNewMeal;