import type { Meta, StoryObj } from '@storybook/react';
import { EventList } from './EventList';

const meta = {
  title: 'Events/EventList',
  component: EventList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EventList>;

export default meta;
type Story = StoryObj<typeof EventList>;

// モックイベントデータ
const mockEvents = [
  {
    id: '1',
    title: 'バレエ公演「白鳥の湖」',
    date: '2024年5月15日 19:00',
    location: '東京都千代田区 東京芸術劇場',
    price: '¥5,000〜',
    category: 'バレエ',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000',
    organizer: '東京バレエ団',
  },
  {
    id: '2',
    title: 'ジャズライブ「Blue Note Special」',
    date: '2024年6月3日 20:00',
    location: '東京都港区 ブルーノート東京',
    price: '¥8,000〜',
    category: 'ジャズ',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000',
    organizer: 'ブルーノート東京',
  },
  {
    id: '3',
    title: '現代演劇「東京物語」',
    date: '2024年5月20日 18:30',
    location: '東京都渋谷区 シアターコクーン',
    price: '¥4,500〜',
    category: '演劇',
    imageUrl: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1000',
    organizer: '劇団四季',
  },
  {
    id: '4',
    title: 'クラシックコンサート「春の調べ」',
    date: '2024年4月10日 19:00',
    location: '東京都新宿区 新宿文化センター',
    price: '¥6,000〜',
    category: 'クラシック',
    imageUrl: 'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=1000',
    organizer: '東京フィルハーモニー交響楽団',
  },
  {
    id: '5',
    title: 'コンテンポラリーダンス公演「MOVE」',
    date: '2024年7月8日 19:30',
    location: '東京都目黒区 東京都美術館',
    price: '¥3,500〜',
    category: 'ダンス',
    imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000',
    organizer: 'DANCE FACTORY',
  },
  {
    id: '6',
    title: 'オペラ「カルメン」',
    date: '2024年6月15日 18:00',
    location: '東京都台東区 東京文化会館',
    price: '¥10,000〜',
    category: 'オペラ',
    imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000',
    organizer: '新国立劇場',
  },
];

export const WithEvents: Story = {
  args: {
    events: mockEvents,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    events: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    events: [],
    isLoading: false,
  },
}; 