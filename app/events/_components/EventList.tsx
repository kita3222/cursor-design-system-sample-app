import React from 'react';
import { EventCard, EventCardProps } from './EventCard';

interface EventListProps {
  events: EventCardProps[];
  isLoading?: boolean;
}

export const EventList: React.FC<EventListProps> = ({ events, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-secondary-200 h-40 rounded-t-lg w-full"></div>
            <div className="bg-white p-4 rounded-b-lg space-y-3">
              <div className="flex justify-between">
                <div className="h-4 bg-secondary-200 rounded w-1/4"></div>
                <div className="h-4 bg-secondary-200 rounded w-1/5"></div>
              </div>
              <div className="h-6 bg-secondary-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-secondary-200 rounded w-2/3"></div>
                <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
                <div className="h-3 bg-secondary-200 rounded w-3/5"></div>
              </div>
              <div className="h-8 bg-secondary-200 rounded w-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="flex justify-center items-center p-8 bg-white rounded-lg shadow-sm border border-secondary-100">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-secondary-900">該当するイベントがありません</h3>
          <p className="mt-1 text-sm text-secondary-500">検索条件を変更して、再度お試しください。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}; 