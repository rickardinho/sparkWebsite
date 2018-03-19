import React from 'react';
import { render } from 'react-dom';
import { H2, H3, H4, P, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const How = () => (
  <div>

    <div className="How">
      <div className="How-header">
        <H2>How it works</H2>
      </div>

      <div className="How-body">

        <H4>How to use Spark</H4>
        <p>Here is a quick overview to get you started.</p>

        <H4>Create an event</H4>
        <p>Click on the Create button to create an event.  You can enter as many details as you want, or add more options to create a poll.  If you create a poll uour friends will be asked to vote and then you can review their votes before you confirm the final details.</p>

        <H4>Invite friends/H4>
        <p>Once you have entered the details, invite your friends.  Tap Invite Friends and Spark will generate a unique link to you event, which you cam then share on Whatsapp, Email, SMS, Facebook, or any other app you and you friends use.  You can even send a link ti pre-existing Whatsapp groups.  Spark works with your other apps to help organize the important details. You can use your existing networks for messages and banter.</p>

        <H4>Respond to invites from your friends</H4>
        <p>Click on a link you receive and Spark will open automatically if you have installed it alrwady and you will be taken directly to you invite. You can also click on any event in the Feed  or Calendar to open ans event and change your vote or response. </p>

        <H4>Check the calendar for upcoming events</H4>
        <p>The calendar shows all your events in chronological order.  You can switch between All events, those you are hosting and those you have been invited to.</p>

        <H4>New invites and activity appear in the Feed</H4>
        <p>Click on any feed item and you can review the details of the event and how all your friends have responded.</p>

        <H4>New features coming soon/H4>
        <p>Calendar syncing - sync your Spark calendar with your phone calendar.</p>
        <p>Albums - share your photos and keep your memories of past events organised. Tag your favourites.</p>
        <p>Make sure you follow us on Facebook or Instagram to stay informed.</p>
        
        <H4>Be notified of changes to events/H4>
        <p>Make sure you allow notifications when you first open Spark.  If you do not you will have to delete the app and reinstall tonbe prompted again (sorry, this is the way those pesky appstores work).</p>
        
        

      </div>

    </div>
  </div>
);

export default How;