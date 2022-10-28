import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
import Head from "next/head";

const HomePage = (props) => {
   return (
      <div>
         <Head>
            <title>NextJS Events</title>
            <meta
               name={'description'}
               content={'Find a lot of great events'}
            />
         </Head>
         <EventList items={props.events}/>
      </div>
   );
};

export const getStaticProps = async () => {
   const featuredEvents = await getFeaturedEvents();
   return {
      props: {
         events: featuredEvents
      },
      revalidate: 1800
   };
};

export default HomePage;
