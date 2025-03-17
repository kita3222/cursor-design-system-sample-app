import React from 'react';
import { Input } from '../../_components/ui/Input';
import { Button } from '../../_components/ui/Button';

interface EventSearchBarProps {
  onSearch: (query: string) => void;
}

export const EventSearchBar: React.FC<EventSearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-4 md:p-6">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Input
            type="search"
            placeholder="イベント名、アーティスト名、会場名など"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="primary"
            type="submit"
            className="whitespace-nowrap"
          >
            検索
          </Button>
          <Button
            variant="outline"
            type="button"
            className="whitespace-nowrap"
            onClick={() => {
              setSearchQuery('');
              onSearch('');
            }}
          >
            リセット
          </Button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-secondary-600 mr-2">人気の検索:</span>
        {['バレエ', 'ジャズ', 'クラシック', '演劇', 'コンテンポラリー'].map((tag) => (
          <button
            key={tag}
            className="text-xs text-secondary-700 bg-secondary-100 hover:bg-secondary-200 px-2 py-1 rounded transition-colors"
            onClick={() => {
              setSearchQuery(tag);
              onSearch(tag);
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}; 