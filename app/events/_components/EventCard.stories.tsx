import type { Meta, StoryObj } from '@storybook/react';
import { EventCard } from './EventCard';

const meta = {
  title: 'Events/EventCard',
  component: EventCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
  args: {
    id: '1',
    title: 'バレエ公演「白鳥の湖」',
    date: '2024年5月15日 19:00',
    location: '東京都千代田区 東京芸術劇場',
    price: '¥5,000〜',
    category: 'バレエ',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000',
    organizer: '東京バレエ団',
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title: 'これは非常に長いタイトルです。2行以上になる場合は省略されるかどうかを確認するためのサンプルです。表示が適切に制限されるか確認します。',
  },
};

export const LongAddress: Story = {
  args: {
    ...Default.args,
    location: '東京都渋谷区神宮前1-2-3 代々木公園文化会館 特設ステージ（屋外エリア）',
  },
};

export const CheapTicket: Story = {
  args: {
    ...Default.args,
    price: '¥1,000〜',
    category: 'ダンス',
    title: '学生ダンスショーケース',
    organizer: '東京ダンス学院',
  },
};

export const ExpensiveTicket: Story = {
  args: {
    ...Default.args,
    price: '¥15,000〜',
    category: 'クラシック',
    title: 'ウィーン・フィルハーモニー管弦楽団来日公演',
    organizer: '日本クラシック音楽協会',
  },
}; 