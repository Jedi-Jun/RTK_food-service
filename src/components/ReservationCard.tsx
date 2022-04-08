import { useDispatch } from 'react-redux';
import { removeReservation } from '../redux/features/reservationSlice';

interface ReservationCardType {
  name: string;
  id: number;
}

export function ReservationCard({ name, id }: ReservationCardType) {
  const dispatch = useDispatch();

  return (
    <div
      className='reservation-card-container'
      onClick={() => dispatch(removeReservation(id))}
    >
      {name}
    </div>
  );
}
