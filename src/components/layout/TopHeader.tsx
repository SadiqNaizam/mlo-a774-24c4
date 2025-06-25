import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, Menu } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const navLinks = [
  { name: 'Movies', href: '#' },
  { name: 'Stream', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Plays', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Activities', href: '#', active: true },
];

const secondaryNavLinks = [
    { name: 'ListYourShow', href: '#' },
    { name: 'Corporates', href: '#' },
    { name: 'Offers', href: '#' },
    { name: 'Gift Cards', href: '#' },
];

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header className={cn("bg-background text-foreground w-full z-50 border-b", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="#" className="text-2xl font-bold text-primary">
                book<span className='font-light'>my</span>show
            </a>
            <div className="relative hidden md:block w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="pl-10 w-full bg-white border-gray-300"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex items-center gap-1">
              <span>Chennai</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6">
              Sign in
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between h-10 text-sm">
            <nav className='flex items-center gap-6'>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className={cn(
                        'hover:text-primary transition-colors',
                        link.active ? 'text-primary font-semibold' : 'text-muted-foreground'
                    )}>
                        {link.name}
                    </a>
                ))}
            </nav>
            <nav className='hidden md:flex items-center gap-6'>
                {secondaryNavLinks.map((link) => (
                     <a key={link.name} href={link.href} className='text-muted-foreground hover:text-primary transition-colors text-xs'>
                        {link.name}
                    </a>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
