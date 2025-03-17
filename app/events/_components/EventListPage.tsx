import React, { useState } from 'react';
import { EventSearchBar } from './EventSearchBar';
import { EventSearchFilter } from './EventSearchFilter';
import { EventList } from './EventList';
import { EventCardProps } from './EventCard';

// モックイベントデータ
const mockEvents: EventCardProps[] = [
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
    category: 'コンテンポラリー',
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
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000',
    organizer: '新国立劇場',
  },
  {
    id: '7',
    title: 'ストリートダンスバトル「DANCE ALIVE」',
    date: '2024年8月5日 15:00',
    location: '東京都渋谷区 代々木第一体育館',
    price: '¥3,800〜',
    category: 'ダンス',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000',
    organizer: 'DANCE ALIVE実行委員会',
  },
  {
    id: '8',
    title: '伝統芸能「歌舞伎特別公演」',
    date: '2024年5月25日 14:00',
    location: '東京都中央区 歌舞伎座',
    price: '¥12,000〜',
    category: '伝統芸能',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000',
    organizer: '松竹株式会社',
  },
];

export const EventListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべてのカテゴリー');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterEvents(query, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterEvents(searchQuery, category);
  };

  const filterEvents = (query: string, category: string) => {
    setIsLoading(true);
    
    // 検索のシミュレーション（実際はAPIリクエストになる）
    setTimeout(() => {
      let filtered = mockEvents;
      
      // クエリによるフィルタリング
      if (query) {
        filtered = filtered.filter(event => 
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.organizer.toLowerCase().includes(query.toLowerCase()) ||
          event.location.toLowerCase().includes(query.toLowerCase())
        );
      }
      
      // カテゴリによるフィルタリング
      if (category && category !== 'すべてのカテゴリー' && category !== 'すべて') {
        filtered = filtered.filter(event => 
          event.category.toLowerCase() === category.toLowerCase()
        );
      }
      
      setFilteredEvents(filtered);
      setIsLoading(false);
    }, 500); // 検索の遅延をシミュレート
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <EventSearchFilter 
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">人気のカテゴリー</h2>
        <div className="flex flex-wrap gap-2">
          {['バレエ', 'ジャズ', 'クラシック', '演劇', 'コンテンポラリー'].map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === tag 
                  ? 'bg-primary-100 text-primary-800' 
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
              }`}
              onClick={() => handleCategoryChange(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <EventList events={filteredEvents} isLoading={isLoading} />
      </div>
    </div>
  );
};