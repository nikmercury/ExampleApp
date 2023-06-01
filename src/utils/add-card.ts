import { GetCardsItem } from '../services';

type AddCardProps = Omit<GetCardsItem, 'card_id' | 'photo_required' | 'schedule'>;
export const addCard = (card: AddCardProps) => {
  console.log(card);
};
