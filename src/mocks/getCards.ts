import { CardType, GetCardsItem } from '../services/hooks/useCards/use-cards.hook';

export const mockGetCards: GetCardsItem[] = [
  {
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
  },
  {
    card_id: 123,
    reviewer_id: 2,
    name: 'Помыть посуду 2',
    reward: 1000,
    photo_required: true,
    video_required: false,
    schedule: [true, false, true, true, false, false, false],
    period_start: '2023-04-17 10:00:00',
    period_stop: null,
    type: CardType.CORSES,
  },
  {
    card_id: 123,
    reviewer_id: 2,
    name: 'Помыть посуду 3',
    reward: 1000,
    photo_required: true,
    video_required: false,
    schedule: [true, false, true, true, false, false, false],
    period_start: '2023-04-17 10:00:00',
    period_stop: null,
    type: CardType.TASKS,
  },
  {
    card_id: 123,
    reviewer_id: 2,
    name: 'Помыть посуду 4',
    reward: 1000,
    photo_required: true,
    video_required: false,
    schedule: [true, false, true, true, false, false, false],
    period_start: '2023-04-17 10:00:00',
    period_stop: null,
    type: CardType.TASKS,
    description: 'Моем посуду в четвертый раз',
  },
];
