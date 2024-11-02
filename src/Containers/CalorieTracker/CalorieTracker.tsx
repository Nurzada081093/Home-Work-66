import Layout from '../../Components/Layout/Layout.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import AddNewMeal from '../AddNewMeal/AddNewMeal.tsx';
import EditTheMeal from '../EditTheMeal/EditTheMeal.tsx';
import { Typography } from '@mui/material';


const CalorieTracker = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/meals" element={<Home />} ></Route>
        <Route path="/meals/new" element={<AddNewMeal/>} ></Route>
        <Route path="/meals/:idMeal/edit" element={<EditTheMeal/>} ></Route>
        <Route path="*" element={<Typography variant="h1" component="h2" sx={{margin: '15% 30%'}}>Not found</Typography>} ></Route>
      </Routes>
    </Layout>
  );
};

export default CalorieTracker;