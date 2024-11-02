import CardItem from './CardItem/CardItem.tsx';
import { IMutation } from '../../types';
import React from 'react';
import { Box } from '@mui/material';

interface Props {
  meals: IMutation[];
  isLoading?: boolean;
  onDeleteClick: (id: string) => void;
  onEditClick: (id: string) => void;
}

const Cards:React.FC<Props> = ({meals, isLoading, onDeleteClick, onEditClick}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '30px', flexWrap: 'wrap'}}>
      {meals.map((meal) => (
        <CardItem key={meal.id} meal={meal} isLoading={isLoading} onDeleteClick={() => onDeleteClick(meal.id)} onEditClick={() => onEditClick(meal.id)}/>
      ))}
    </Box>
  );
};

export default Cards;