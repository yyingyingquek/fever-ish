import '../styles/globals.css';
import { Inter } from '@next/font/google';
import { getFeaturedEvents } from 'dummy-data';
import EventList from '@/components/events/event-list';
import Layout from '@/components/layout/layout';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Layout>
      <div>
        <EventList items={featuredEvents}></EventList>
      </div>
    </Layout>
  );
}
