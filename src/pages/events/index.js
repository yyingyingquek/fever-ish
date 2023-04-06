import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';
import { getAllEvents } from 'dummy-data';

function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventsHandler(year, month) {
    // programmatically navigate to slug page
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      {/* pass the function into EventsSearch component, no execution here.
        Execute it in EventsSeach component after the form is submitted
      */}
      <EventsSearch onSearch={findEventsHandler}></EventsSearch>
      <EventList items={allEvents}></EventList>
    </Fragment>
  );
}

export default AllEventsPage;
