import { API_METHODS } from '../../api-methods';
import { useFetch } from '../fetch.hook';

export enum CardType {
  ALL = 'ALL',
  TASKS = 'TASKS',
  CORSES = 'CORSES',
}

export type GetCards = {
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
  every_month?: boolean[] | null;
};

const mockGetCards: GetCards = {
  card_id: 123,
  reviewer_id: 2,
  name: 'Помыть посуду',
  reward: 1000,
  photo_required: true,
  video_required: false,
  schedule: [true, false, true, true, false, false, false],
  period_start: '2023-04-17 10:00:00',
  period_stop: null,
  type: CardType.ALL,
};

export const useCards = () => {
  const { loading, refetch } = useFetch<GetCards>(API_METHODS.GET_CARDS);
  return {
    data: mockGetCards,
    loading,
    refetch,
  };
};
