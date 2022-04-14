import { useAppDispatch } from '../redux/hooks';
import { removeReservation } from '../redux/features/reservationSlice';

interface ReservationCardType {
  name: string;
  id: number;
}

export function ReservationCard({ name, id }: ReservationCardType) {
  const dispatch = useAppDispatch();

  return (
    <div
      className='reservation-card-container'
      onClick={() => dispatch(removeReservation(id))}
    >
      {id + 1}. {name}
    </div>
  );
}
