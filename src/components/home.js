import React from 'react';
import { render } from 'react-dom';
import { NavButton, NavbarWrapper, h2, h3, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';
import GooglePlay from './general/google-play.js';
import AppStore from './general/app-store.js';
import sparkMainImage from './../images/homemainpictcut.jpg';
import pollImage from './../images/poll.png';
import inviteImage from './../images/invite.png';
import shareImage from './../images/share.png';
import saveImage from './../images/save.png';
import album from './../images/3album.jpg';
import resultVote from './../images/2-result-vote.jpg';
import message from './../images/1-message.jpg';
import Footer from './general/footer.js';
import Carousel from './general/carousel.js';

const Home = () => (
  <div>
    <div className="Home">
      <div className="Home-header">
        <h2>Your social life sorted.</h2>
        <img src={sparkMainImage} alt="SparkLifestyleImage" width="339" height="411" />
      </div>

    </div>

    <div>

      <h2>Spark is a FREE mobile app that makes organising social events and sharing photos easy.</h2>

      <DownloadDiv>
        <div><GooglePlay /></div>
        <div style={{ width: '50px' }}></div>
        <div><AppStore /></div>
      </DownloadDiv>

      <BulletWrapper>
        <BulletDiv>
          <img src={pollImage} alt="" width="49" height="49"/>
          <div style={{ width: '10px' }} />
          <h3>Poll to decide what, where and when.</h3>
        </BulletDiv>

        <BulletDiv>
          <img src={inviteImage} alt="" width="49" height="49" />
          <div style={{ width: '10px' }} />
          <h3>Invite friends, family or groups.</h3>
        </BulletDiv>

        <BulletDiv>
          <img src={shareImage} alt="" width="49" height="49" />
          <div style={{ width: '10px' }} />
          <h3>Easily share and view the best pictures.</h3>
        </BulletDiv>

        <BulletDiv>
          <img src={saveImage} alt="" width="49" height="49" />
          <div style={{ width: '10px' }} />
          <h3>Save your favourites to Facebook and more...</h3>
        </BulletDiv>

      </BulletWrapper>


      <Carousel>
        <ImageDiv><img src={album} alt="" width="230" /></ImageDiv>
        <ImageDiv><img src={resultVote} alt="" width="230" /></ImageDiv>
        <ImageDiv><img src={message} alt="" width="230" /></ImageDiv>
      </Carousel>


    </div>



  </div>
);

export default Home;
