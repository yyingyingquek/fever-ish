import '../styles/globals.css';
import { Inter } from '@next/font/google';
import { getFeaturedEvents } from 'dummy-data';
import EventList from '@/components/events/event-list';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}
