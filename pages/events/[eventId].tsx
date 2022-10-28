import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import Head from "next/head";

const EventDetailPage = (props) => {
   const event = props.selectedEvent;

   if (!event) {
      return <div className="center">
         <p>Loading...</p>
      </div>;
   }

   return (
      <Fragment>
         <Head>
            <title>{event.title}</title>
            <meta
               name={'description'}
               content={event.description}
            />
         </Head>
         <EventSummary title={event.title}/>
         <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
         <EventContent>
            <p>{event.description}</p>
         </EventContent>
      </Fragment>
   );
};

export const getStaticProps = async (context) => {
   const eventId = context.params.eventId;
   const event = await getEventById(eventId);

   if (!event) {
      return {
         notFound: true
      };
   }

   return {
      props: {
         selectedEvent: event
      },
      revalidate: 30
   };
};

export const getStaticPaths = async () => {
   const events = await getFeaturedEvents();
   return {
      paths: events.map((event) => ({
         params: { eventId: event.id }
      })),
      fallback: true
   };
};

export default EventDetailPage;
