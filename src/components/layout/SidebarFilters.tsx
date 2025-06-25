import React from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface SidebarFiltersProps {
  className?: string;
}

const dateFilters = ['Today', 'Tomorrow', 'This Weekend'] as const;

type DateFilter = typeof dateFilters[number];

const SidebarFilters: React.FC<SidebarFiltersProps> = ({ className }) => {
  const [activeDateFilter, setActiveDateFilter] = React.useState<DateFilter>('Today');

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>, filter: string) => {
    e.stopPropagation(); // Prevent accordion from toggling
    console.log(`Clearing ${filter} filter`);
    if (filter === 'Date') {
      setActiveDateFilter('Today'); // Reset to default
    }
  };

  return (
    <aside className={cn('w-72 p-4 bg-background flex flex-col', className)}>
      <h2 className="text-2xl font-bold mb-6 text-foreground">Filters</h2>
      <div className="flex-grow">
        <Accordion type="multiple" defaultValue={['date']} className="w-full space-y-4">
          {/* Date Filter */}
          <AccordionItem value="date" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline font-semibold text-foreground">
              <div className="flex justify-between items-center w-full">
                <span>Date</span>
                <Button variant="link" className="text-primary p-0 h-auto" onClick={(e) => handleClear(e, 'Date')}>Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-0 space-y-4">
              <div className="flex flex-wrap gap-2">
                {dateFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    onClick={() => setActiveDateFilter(filter)}
                    className={cn(
                      'rounded-md border-gray-300 text-foreground font-normal hover:bg-secondary/80',
                      activeDateFilter === filter && 'border-primary text-primary bg-secondary'
                    )}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="date-range" />
                <Label htmlFor="date-range" className="font-normal text-foreground">Date Range</Label>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Categories Filter */}
          <AccordionItem value="categories" className="border-b-0">
             <AccordionTrigger className="py-2 hover:no-underline font-semibold text-foreground">
              <div className="flex justify-between items-center w-full">
                <span>Categories</span>
                <Button variant="link" className="text-primary p-0 h-auto" onClick={(e) => handleClear(e, 'Categories')}>Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-0">
              <p className="text-muted-foreground">Category options will be listed here.</p>
            </AccordionContent>
          </AccordionItem>

          {/* More Filters */}
          <AccordionItem value="more-filters" className="border-b-0">
             <AccordionTrigger className="py-2 hover:no-underline font-semibold text-foreground">
              <div className="flex justify-between items-center w-full">
                <span>More Filters</span>
                <Button variant="link" className="text-primary p-0 h-auto" onClick={(e) => handleClear(e, 'More Filters')}>Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-0">
                <p className="text-muted-foreground">Additional filter options will be listed here.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Price Filter */}
          <AccordionItem value="price" className="border-b-0">
             <AccordionTrigger className="py-2 hover:no-underline font-semibold text-foreground">
              <div className="flex justify-between items-center w-full">
                <span>Price</span>
                <Button variant="link" className="text-primary p-0 h-auto" onClick={(e) => handleClear(e, 'Price')}>Clear</Button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-0">
               <p className="text-muted-foreground">Price range slider will be here.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-auto pt-6">
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-secondary hover:text-primary">
          Browse by Venues
        </Button>
      </div>
    </aside>
  );
};

export default SidebarFilters;
