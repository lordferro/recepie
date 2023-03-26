import PropTypes from 'prop-types';
import { Title, Wrapper } from './Recipe.styled';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';
import { Component } from 'react';

export class Recipe extends Component {
  // Логика изменения состония написана в каждом рецепте, поэтому мы открываем каждый отдельно/ Если надо было имет открытый только один, тогда состояние было бы в общем предке
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      recipe: {
        name,
        time,
        servings,
        calories,
        difficulty,
        image = 'http://via.placeholder.com/340x200',
      },
    } = this.props;
    return (
      <Wrapper>
        <img src={image} width="340" alt="" onClick = {this.toggle}></img>
        <Title>{name}</Title>
        {isOpen && (
          <>
            <RecipeInfo time={time} servings={servings} calories={calories} />
            <RecipeDifficulty difficulty={difficulty} />
          </>
        )}
      </Wrapper>
    );
  }
}

Recipe.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  servings: PropTypes.number,
  calories: PropTypes.number,
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
};
