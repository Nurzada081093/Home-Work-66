import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import { IMutation } from '../../../types';
import React, { MouseEventHandler } from 'react';
import { wordTransform } from '../../../Constantas.ts';
import { Box, Button } from '@mui/material';
import ButtonLoadingStyle from '../../UI/ButtonLoadingStyle/ButtonLoadingStyle.tsx';
import { NavLink } from 'react-router-dom';

interface Props {
  meal: IMutation;
  isLoading?: boolean;
  onDeleteClick: MouseEventHandler<HTMLButtonElement>;
}

const CardItem: React.FC<Props> = ({meal, isLoading = false, onDeleteClick}) => {

  const mealTimeName: string = wordTransform(meal.time);
  let imageUrl;

  if (mealTimeName === 'Breakfast') {
    imageUrl = 'https://static01.nyt.com/images/2023/04/23/multimedia/23WELL-HEALTHY-BREAKFAST9-lgwc/23WELL-HEALTHY-BREAKFAST9-lgwc-superJumbo.jpg';
  } else if (mealTimeName === 'Snack') {
    imageUrl = 'https://assets.sweat.com/html_body_blocks/images/000/013/890/original/EasyHealthySnacks_en65ab5213130c9862172ac11435f055d9_en38b28edc7b2830a46f6e00bfeceeb1b6.jpg?1596090039';
  } else if (mealTimeName === 'Dinner') {
    imageUrl = 'https://recipes.net/wp-content/uploads/2024/05/download-3-1024x682.jpg';
  } else {
    imageUrl = 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/spicy_gochujang_udon_71125_16x9.jpg';
  }

  return (
    <>
      <Card sx={{ width: '350px', marginBottom: '30px', marginRight: '20px'}}>
        <div>
          <Typography level="title-lg">{mealTimeName}</Typography>
          <Typography level="body-md">{meal.description}</Typography>
          <Typography level="title-lg" sx={{ position: 'absolute', top: '0.875rem', right: '1rem' }}>{meal.calories} ckal</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={imageUrl}
            srcSet={imageUrl}
            loading="lazy"
            alt="Breakfast"
          />
        </AspectRatio>
        <Box sx={{display: 'flex', justifyContent: 'space-around', margin: '20px 0'}}>
          <Button disabled={isLoading} variant="contained"
                  sx={{width: '100px', height: '47px'}}
                  type="button" onClick={onDeleteClick}>
            <img width="30" height="30" src="https://img.icons8.com/material-rounded/24/FFFFFF/trash.png" alt="trash"/>
            {isLoading ? <ButtonLoadingStyle/> : null}
          </Button>
          <Button sx={{width: '100px', height: '47px'}} type="button" variant="contained"  to={`/meals/${meal.id}/edit`} component={NavLink}>
          <img width="30" height="30" src="https://img.icons8.com/sf-regular/48/FFFFFF/create-new.png"
                 alt="create-new"/>
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default CardItem;