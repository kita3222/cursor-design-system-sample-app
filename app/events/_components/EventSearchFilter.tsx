import React, { useState } from 'react';
import { Input } from '../../_components/ui/Input';

interface EventSearchFilterProps {
  onSearch: (query: string) => void;
  onCategoryChange?: (category: string) => void;
  categories?: string[];
}

export const EventSearchFilter: React.FC<EventSearchFilterProps> = ({ 
  onSearch, 
  onCategoryChange,
  categories = ['すべてのカテゴリー', 'バレエ', 'ジャズ', 'クラシック', '演劇', 'コンテンポラリー']
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex w-full rounded-lg overflow-hidden border border-gray-200">
        {/* カテゴリー選択ドロップダウン - モバイルでは非表示 */}
        <div className="relative border-r border-gray-200 hidden md:block">
          <button 
            type="button"
            className="h-full flex items-center justify-between px-4 py-2 bg-white whitespace-nowrap font-medium text-secondary-700 focus:outline-none w-48"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedCategory}</span>
            <svg 
              className={`ml-2 h-5 w-5 text-secondary-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* ドロップダウンメニュー */}
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="py-1 max-h-60 overflow-auto">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        selectedCategory === category ? 'bg-gray-50 text-primary-600' : 'text-secondary-700'
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 検索入力フィールド */}
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="カテゴリーやイベントを検索"
            className="h-full w-full border-0 focus:ring-0 text-secondary-900 rounded-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* 検索ボタン */}
        <button
          type="submit"
          className="bg-white px-4 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </div>
  );
}; 