import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const AllEventsPage = (props) => {
   const events = props.events;
   const router = useRouter();

   const findEventsHandler = (year, month) => {
      router.push({
         pathname: `/events/${year}/${month}`
      });
   };

   return (
      <Fragment>
         <Head>
            <title>All Events</title>
            <meta
               name={'description'}
               content={'Find a lot of great events'}
            />
         </Head>
         <EventsSearch onSearch={findEventsHandler}/>
         <EventList items={events}/>
      </Fragment>
   );
};

export const getStaticProps = async () => {
   const events = await getAllEvents();
   return {
      props: {
         events: events
      },
      revalidate: 60
   };
};

export default AllEventsPage;
