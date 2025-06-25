import React from 'react';
import EventCard, { type EventCardData } from './EventCard';
import { cn } from '@/lib/utils';

const eventsData: EventCardData[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1550684376-ef7b6674651a?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'VGP Wonder World Chennai',
    description: 'VGP Wonder World: Chennai',
    date: 'Sun, 22 Jun onwards',
    isPromoted: true,
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'Ideal Beach Resort Day Outing',
    description: 'Ideal Beach Resort: ECR',
    date: 'Mon, 23 Jun onwards',
    isPromoted: true,
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1599599810609-b6f8f26d6b88?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'Casagrand Sundance',
    description: 'Casagrand Suncity: Chennai',
    date: 'Sun, 22 Jun onwards',
    isPromoted: false,
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'VGP Marine Kingdom - Chennai',
    description: 'VGP Marine Kingdom: ECR',
    date: 'Sun, 22 Jun onwards',
    isPromoted: false,
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1596701062353-733351469b43?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'Adventure Zone',
    description: 'Outdoor Sports & Games',
    date: 'All Days',
    isPromoted: false,
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'Gourmet Food Tour',
    description: "Explore Chennai's Finest Cuisine",
    date: 'Sat & Sun',
    isPromoted: true,
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1549468047-52f7f7dde346?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'Historical Temple Tour',
    description: 'A Walk Through Ancient History',
    date: 'Fri, 21 Jun onwards',
    isPromoted: false,
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=300&h=224&fit=crop&crop=entropy',
    title: 'Art & Craft Workshop',
    description: 'Unleash Your Inner Artist',
    date: 'This Weekend',
    isPromoted: false,
  },
];

interface EventCardGridProps {
    className?: string;
}

const EventCardGrid: React.FC<EventCardGridProps> = ({ className }) => {
  return (
    <section className={cn("w-full", className)}>
      <h2 className="text-3xl font-bold mb-6 text-foreground">Activities In Chennai</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventCardGrid;
