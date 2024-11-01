import Layout from '../../Components/Layout/Layout.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';


const CalorieTracker = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
    </Layout>
  );
};

export default CalorieTracker;