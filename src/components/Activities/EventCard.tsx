import React from 'react';
import { cn } from '@/lib/utils';

export interface EventCardData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  isPromoted?: boolean;
}

interface EventCardProps {
  event: EventCardData;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className }) => {
  return (
    <div className={cn("bg-card rounded-lg overflow-hidden flex flex-col cursor-pointer group shadow-sm border border-transparent hover:border-border hover:shadow-lg transition-all duration-300", className)}>
      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {event.isPromoted && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm tracking-wide">
            PROMOTED
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black">
          <p className="text-white text-sm font-medium">{event.date}</p>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-foreground leading-tight">{event.title}</h3>
        <p className="text-sm text-muted-foreground mt-1 flex-grow">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
