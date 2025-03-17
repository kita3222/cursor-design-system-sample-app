import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../../_components/ui/Card';
import { Badge } from '../../_components/ui/Badge';
import { Button } from '../../_components/ui/Button';

export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  price: string;
  category: string;
  imageUrl: string;
  organizer: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  location,
  price,
  category,
  imageUrl,
  organizer,
}) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-transform hover:translate-y-[-4px] border border-gray-200 p-0">
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <CardHeader className="p-4 bg-white border-b border-gray-200">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2 h-14 flex items-start">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 bg-gray-100">
        <div className="flex flex-col space-y-2 text-secondary-600">
          <div className="flex items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{organizer}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="mt-auto bg-white border-t border-gray-200 p-4">
        <div className="w-full flex-col gap-3">
          <div className="w-full flex justify-end mb-3">
            <span className="text-primary-600 font-medium text-sm">
              {price}
            </span>
          </div>
          <Link href={`/events/${id}`} className="w-full">
            <Button variant="outline" size="sm" fullWidth={true}>
              詳細を見る
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}; 