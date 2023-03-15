import { BsAlarm, BsBarChart } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';

export const Recipe = ({
  recipe: { name, time, servings, calories, image, quantity },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm />
          <p>{time} mins</p>
          <AiOutlinePieChart />
          <p>{servings} mins</p>
          <BsBarChart />
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
