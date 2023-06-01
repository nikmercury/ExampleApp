import { API_METHODS } from '../../api-methods';
import { useFetch } from '../fetch.hook';
import { mockGetCards } from '../../../mocks';

export enum CardType {
  ALL = 'ALL',
  TASKS = 'TASKS',
  CORSES = 'CORSES',
}

export type GetCardsItem = {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: boolean[] | null;
  period_start: string | null;
  period_stop: string | null;
  type: CardType;
  description?: string | null;
  every_month?: number[] | null;
};

export const useCards = () => {
  const { loading, refetch } = useFetch<GetCardsItem[]>(API_METHODS.GET_CARDS);
  return {
    data: mockGetCards,
    loading,
    refetch,
  };
};
