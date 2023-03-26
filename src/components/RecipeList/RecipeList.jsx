import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { ListItem } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 5}}>
      {recipes.map(recipe => (
        <ListItem key={recipe.id}>
          <Recipe recipe={recipe} />
        </ListItem>
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
