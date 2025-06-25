import React from 'react';

// Import layout and organism components
import TopHeader from '@/components/layout/TopHeader';
import SidebarFilters from '@/components/layout/SidebarFilters';
import EventCategoryChips from '@/components/Activities/EventCategoryChips';
import EventCardGrid from '@/components/Activities/EventCardGrid';

/**
 * The main page component for the BookMyShow Activities Overview.
 * This page orchestrates the overall layout and combines the major components:
 * - TopHeader for global navigation and search.
 * - SidebarFilters for detailed activity filtering.
 * - EventCategoryChips for quick category selection.
 * - EventCardGrid to display the list of available activities.
 *
 * The layout implements a responsive two-column design on larger screens,
 * with filters in a dedicated sidebar on the left and the main content on the right,
 * which is consistent with the project requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Top Header Section - Spans the full width */}
      <TopHeader />

      {/* Main Content Area with Sidebar and Event Grid */}
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] lg:gap-8">
          
          {/* Sidebar for Filters (visible on large screens) */}
          <aside className="hidden lg:block">
            {/* The SidebarFilters component is self-contained with its own state and layout */}
            <SidebarFilters />
          </aside>

          {/* Main content section for activities */}
          <main>
            {/* Category chips are placed above the event grid for quick filtering */}
            <div className="mb-6">
              <EventCategoryChips />
            </div>

            {/* The EventCardGrid component contains its own title and the grid of cards */}
            <EventCardGrid />
          </main>

        </div>
      </div>
    </div>
  );
};

export default IndexPage;
