import React from 'react';
import { render } from 'react-dom';
import { NavButton, NavbarWrapper } from './../styles/styles';
import GooglePlay from './general/google-play.js';
import AppStore from './general/app-store.js';
import sparkMainImage from './../images/homemainpictcut.jpg';
import twitterImage from './../images/twitter.jpg';
import facebookImage from './../images/facebook.jpg';
import instagramImage from './../images/instagram.jpg';
import pollImage from './../images/poll.png';
import inviteImage from './../images/invite.png';
import shareImage from './../images/share.png';
import saveImage from './../images/save.png';
import album from './../images/3album.jpg';
import resultVote from './../images/2-result-vote.jpg';
import message from './../images/1-message.jpg';
import Footer from './general/footer.js';

const Home = () => (
  <div>
    <div className="Home">
      <div className="Home-header">
        <h2>Your social life sorted.</h2>
        <img src={sparkMainImage} alt="SparkLifestyleImage" width="339" height="411" />
      </div>

    </div>
    <div>

      <a href="http://www.twitter.com/SparkAppSocial" ><img src={twitterImage} alt="" title="Follow Spark on Twitter" width="45" height="45" /></a>
      <a href="https://www.facebook.com/Spark.app.social" ><img src={facebookImage} alt="" title="Like Us on Facebook" width="45" height="45" /></a>
      <a href="http://www.instagram.com/spark.app" ><img src={instagramImage} alt="" title="Follow Spark on Instagram" width="45" height="45" /></a>

    </div>
    <div>

      <h2>Spark is a FREE mobile app that makes organising social events and sharing photos easy.</h2>

      <div>
        <GooglePlay />
        <AppStore />
      </div>

      <div>

        <img src={pollImage} alt="" width="49" height="49"/>
        <h3>Poll to decide what, where and when.</h3>

        <img src={inviteImage} alt="" width="49" height="49" />
        <h3>Invite friends, family or groups.</h3>

        <img src={shareImage} alt="" width="49" height="49" />
        <h3>Easily share and view the best pictures.</h3>

        <img src={saveImage} alt="" width="49" height="49" />
        <h3>Save your favourites to Facebook and more...</h3>

      </div>

    </div>

    <div>
      <img src={album} alt="" data-image-width="280" data-image-height="499" />
      <img src={resultVote} alt="" data-image-width="280" data-image-height="499" />
      <img src={message} alt="" data-image-width="280" data-image-height="499" />
    </div>

    <Footer />
  </div>
);

export default Home;
