import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import { getFilteredEvents } from 'dummy-data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function FilteredEventsPage() {
  const router = useRouter();

  // componenet is rendered twice because of how react works & how route data is extracted
  // hook is run after the component is run for the first time - therefore first time have no access to the url yet
  const filterDataFromURL = router.query.slug;
  console.log(filterDataFromURL);

  if (!filterDataFromURL) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = filterDataFromURL[0];
  const filteredMonth = filterDataFromURL[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return <p className='center'>Invalid Filter. Please adjust your filter.</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });
  
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className='center'>No Events Found.</p>
  }

  // date constructor expect month to start at 0 and not 1
  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents}></EventList>
    </Fragment>
  );
}

export default FilteredEventsPage;
