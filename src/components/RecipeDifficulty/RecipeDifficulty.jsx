import { Badge, BadgeList, Title, Wrapper } from './RecipeDifficulty.styled';

export const RecipeDifficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Title>difficulty</Title>
      <BadgeList>
        {/* передаём пропс active в зависимости чему равен difficulty */}
        <Badge active={difficulty === 'easy'}>easy </Badge>
        <Badge active={difficulty === 'medium'}>medium </Badge>
        <Badge active={difficulty === 'hard'}>hard </Badge>
      </BadgeList>
    </Wrapper>
  );
};
