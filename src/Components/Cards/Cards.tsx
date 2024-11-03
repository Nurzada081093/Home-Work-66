import CardItem from './CardItem/CardItem.tsx';
import { IMutation } from '../../types';
import React from 'react';
import { Box } from '@mui/material';

interface Props {
  meals: IMutation[];
  isLoading?: boolean;
  onDeleteClick: (id: string) => void;
}

const Cards:React.FC<Props> = ({meals, isLoading, onDeleteClick}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-around', marginTop: '30px', flexWrap: 'wrap'}}>
      {meals.map((meal) => (
        <CardItem key={meal.id} meal={meal} isLoading={isLoading} onDeleteClick={() => onDeleteClick(meal.id)}/>
      ))}
    </Box>
  );
};

export default Cards;