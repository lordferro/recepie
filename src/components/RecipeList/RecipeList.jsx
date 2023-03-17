import { Recipe } from '../Recipe/Recipe';
import { ListItem } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <ListItem key={recipe.id}>
          <Recipe recipe={recipe} />
        </ListItem>
      ))}
    </ul>
  );
};
