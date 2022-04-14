import { useState } from 'react';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from './redux/store';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { addReservation } from './redux/features/reservationSlice';
import { ReservationCard, FoodCard } from './components';

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');

  const reservations = useAppSelector(
    state => state.reservationsFromStore.value
  );
  const dispatch = useAppDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((reservation, idx) => {
                return (
                  <ReservationCard key={idx} name={reservation} id={idx} />
                );
              })}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              type='text'
              value={reservationNameInput}
              onChange={e => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add1</button>
          </div>
        </div>
        <div className='customer-food-container'>
          {reservations.map((food, idx) => {
            return <FoodCard key={idx} name={food} id={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
