import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";

import classes from './event-item.module.scss';

const EventItem = (props: any) => {
   const { title, image, date, location, id } = props;

   const humanReadableDate = new Date(date).toLocaleDateString('es-CL', {
      day: "numeric",
      month: "long",
      year: "numeric"
   });

   const formattedAddress = location.replace(' ', '\n');
   const exploreLink = `/events/${id}`;

   return (
      <li className={classes.item}>
         <picture>
            <img src={'/' + image} alt={title} />
         </picture>
         <div className={classes.content}>
            <div className={classes.summary}>
               <h2> {title}</h2>
               <div className={classes.date}>
                  <DateIcon />
                  <time>{humanReadableDate}</time>
               </div>
               <div className={classes.address}>
                  <address>{formattedAddress}</address>
               </div>
            </div>
            <div className={classes.actions}>
               <Button link={exploreLink}>
                  <span>Explore Event</span>
                  <span className={classes.icon}><ArrowRightIcon /></span>
               </Button>
            </div>
         </div>
      </li>
   );
};

export default EventItem;
