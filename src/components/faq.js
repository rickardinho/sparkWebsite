import React from 'react';
import { H2, H4, P } from './../styles/styles';


const Faq = () => (
  <div>

    <div className="Faq">
      <div className="Faq-header">
        <H2>Frequently Asked Questions</H2>
      </div>

      <div className="Faq-body">

        <H4>Welcome to our FAQ</H4>
        <P>{`Here some answers to the questions you may have regarding Spark App. If you don't find what you are looking for, do not hesitate to contact us via our contact page or email us and we will get back to you as soon as possible.`}</P>

        <H4>Q. What is Spark?</H4>
        <P>{`A: Spark is a free mobile app that allows you to arrange to meet up with friends easily. You can poll friends or family on activities, dates and venues, and easily gather the photos from everyone who attends the event. Then share your favourite photos to social networks (eg. Facebook) or cloud photo storage (eg. Picasa, Google Drive...)`}</P>

        <H4>Q. How does Spark work?</H4>
        <P>{`A: Ask your friend’s what they would like to do, when they would like to go out and where they would prefer to meet.&nbsp; You receive a poll back from all your friends, and you can see which is the most popular among your friends. Once you have confirmed the event, you can collect the best photos during and after your event, regardless of who took them, effortlessly creating albums of the most memorable moments in life.`}</P>

        <H4>Q. What can I use Spark for?</H4>
        <P>{`A: Spark can be used for all occasions. Use it for drinks at the pub, parties, dinners, birthdays, cinema trips, sports events, gigs and concerts, holidays, fundraisers, wedding gatherings or stag weekends.`}</P>

        <H4>Q. Who is it for?</H4>
        <P>{`A: You can use Spark with all your groups, including friends, family, sports clubs, interest groups, wedding guests and parents and kids' clubs.`}</P>

        <H4>Q. When will the app be launched?</H4>
        <P>{`A: SPARK is coming soon. Please enter your email below to be notified as soon as it's ready.`}</P>

        <H4>Q. Why shouldn’t I just use Facebook?</H4>
        <P>{`A: With Spark you can poll groups of people, so you can let everybody choose to what to do.&nbsp; A picnic or an afternoon tea with granny? Karting or paintballing for the stag do? Or a friday drink in Soho or Shoreditch (yes, you can poll on location and dates too)?`}</P>
        <P>{`Then you can share the pictures within the group, which means even granny will be able to see the pictures that all the family took of her birthday and Dave’s stag do pictures will only be seen by the people who were at the stag do (it’s probably better this way).`}</P>
        <P>{`It’s easy to miss Facebook event notifications in an endless stream of adverts, baby photos and status updates.&nbsp; Spark is a new app solely for events, and is designed specially for use with events.&nbsp; Spark’s is designed so you can organise the best parties, get consensus on the best dates for a holiday, and decide who’s coming to the next hot ticket in town.`}</P>


      </div>

    </div>
  </div>
);

export default Faq;
