import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFood } from '../redux/features/foodSlice';

interface FoodCardType {
  name: string;
  id?: number;
}

export function FoodCard({ name }: FoodCardType) {
  const [foodNameInput, setFoodNameInput] = useState('');

  const food = useSelector((state: any) => state.foodFromStore.value);
  const dispatch = useDispatch();

  return (
    <div className='customer-food-card-container'>
      <p>{name}</p>
      <div className='customer-foods-container'>
        <div className='customer-food'>{food[name]}</div>
        <div className='customer-food-input-container'>
          <input
            type='text'
            value={foodNameInput}
            onChange={e => setFoodNameInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(addFood({ main: name, side: foodNameInput }));
              console.log(food);
            }}
          >
            Add2
          </button>
        </div>
      </div>
    </div>
  );
}