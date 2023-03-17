import { InfoBlock, Wrapper } from './RecipeInfo.styled';
import { BsAlarm, BsBarChart } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';

export const RecipeInfo = ({ time, servings, calories }) => {
  return (
    <Wrapper>
      <InfoBlock>
        <BsAlarm />
        <p>{time} mins</p>
      </InfoBlock>
      <InfoBlock>
        <AiOutlinePieChart />
        <p>{servings} mins</p>
      </InfoBlock>
      <InfoBlock>
        <BsBarChart />
        <p>{calories} calories</p>
      </InfoBlock>
    </Wrapper>
  );
};
