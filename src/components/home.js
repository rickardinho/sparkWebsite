import React from 'react';
import { render } from 'react-dom';
import { NavButton, NavbarWrapper } from './../../styles/styles';
import sparkMainImage from './images/homemainpictcut.jpg';

const Home = () => (
  <div>
    <div className="Home">
      <div className="Home-header">
        <h2>Your social life sorted.</h2>
        <img src={sparkMainImage} alt="SparkLifestyleImage" width="339" height="411" />
      </div>
      <p className="Home-intro">
        To get started, blah blah.
      </p>
    </div>
    <div>
      // --- social sharing ----
      <a href="http://www.twitter.com/SparkAppSocial" ><img src="images/twitter.jpg" alt="" title="Follow Spark on Twitter" width="45" height="45" /></a>
      <a href="https://www.facebook.com/Spark.app.social" ><img src="images/facebook.jpg" alt="" title="Like Us on Facebook" width="45" height="45" /></a>
      <a href="http://www.instagram.com/spark.app" target="_blank" <img src="images/instagram.jpg" alt="" title="Follow Spark on Instagram" width="45" height="45" /></a>
    </div>
    <div>

      <h2>Spark is a FREE mobile app that makes organising social events and sharing photos easy.</h2>
      <a href="try-it.html" data-href="page:U28929"></a>
      // replace with get it on Android and Google Play links
      <img src="images/poll.png" alt="" width="49" height="49"/>
      <h3>Poll to decide what, where and when.</h3>
      //
      <img src="images/invite.png" alt="" width="49" height="49" />
      <h3>Invite friends, family or groups.</h3>
      //
      <img src="images/share.png" alt="" width="49" height="49" />
      <h3>Easily share and view the best pictures.</h3>
      //
      <img src="images/save.png" alt="" width="49" height="49" />
      <h3>Save your favourites to Facebook and more...</h3>

    </div>

    <div> //3 images rotating
      <img src="images/3album.jpg" alt="" data-image-width="280" data-image-height="499" />
      <img src="images/2-result-vote.jpg" data-image-width="280" data-image-height="499" />
      <img src="images/1-message.jpg" alt="" data-image-width="280" data-image-height="499" />
    </div>

    <div>
     <p>Copyright © 2016 Wanna Enterprises Limited. All rights reserved. Read our <a class="nonblock" href="terms-and-conditions.html" >Terms &amp; Conditions</a> and <a class="nonblock" href="privacy-policy.html" >Privacy Policy</a></p>
    </div>
  </div>
);

export default Home;
