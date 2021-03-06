import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addFood } from '../redux/features/foodSlice';

interface FoodCardType {
  name: string;
  id: number;
}

export function FoodCard({ name, id }: FoodCardType) {
  const [foodNameInput, setFoodNameInput] = useState('');

  const food = useAppSelector(state => state.foodFromStore.value);
  const dispatch = useAppDispatch();

  return (
    <div className='customer-food-card-container'>
      <p>
        {id + 1}. {name}
      </p>
      <div className='customer-foods-container'>
        <div className='customer-food'>
          <ul>
            {food[name]?.map((item: number, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='customer-food-input-container'>
          <input
            type='text'
            value={foodNameInput}
            onChange={e => setFoodNameInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(addFood({ main: name, side: foodNameInput }));
              setFoodNameInput('');
            }}
          >
            Add2
          </button>
        </div>
      </div>
    </div>
  );
}
