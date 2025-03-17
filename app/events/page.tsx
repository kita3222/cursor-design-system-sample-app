import { EventListPage } from './_components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'イベント一覧 | Dance - パフォーマンスチケット販売プラットフォーム',
  description: '舞台、コンサート、ダンスショーなどのパフォーマンス系イベントをご覧いただけます。興味のあるイベントを検索して、あなたの体験を見つけましょう。',
};

export default function EventsPage() {
  return <EventListPage />;
} 