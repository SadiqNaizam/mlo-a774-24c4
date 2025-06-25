import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EventCategoryChipsProps {
  className?: string;
}

const categories = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks',
  'Parties',
  'Unique Tours',
] as const;

const EventCategoryChips: React.FC<EventCategoryChipsProps> = ({ className }) => {
  const [activeCategory, setActiveCategory] = React.useState<string>(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          onClick={() => handleCategoryClick(category)}
          className={cn(
            'rounded-full border-gray-300 bg-white text-gray-800 hover:bg-secondary/80 hover:text-secondary-foreground font-normal text-sm px-4 py-2 h-auto transition-colors',
            {
              'bg-secondary text-secondary-foreground border-primary/50': activeCategory === category,
            }
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default EventCategoryChips;
