import Link from 'next/link';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={'/' + image} alt='event image'></img>

      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>

      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}

export default EventItem;
