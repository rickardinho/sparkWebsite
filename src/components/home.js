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
      <a class="nonblock nontext clip_frame grpelem shared_content" id="u12193" href="http://www.twitter.com/SparkAppSocial" target="_blank" data-muse-uid="U12193" data-muse-type="img_frame" data-content-guid="u12193_content"><!-- image --><img class="block temp_no_img_src" id="u12193_img" data-orig-src="images/twitter.jpg?crc=200920448" alt="" title="Follow Spark on Twitter" width="45" height="45" data-muse-src="images/twitter.jpg?crc=200920448" src="images/blank.gif?crc=4208392903"/></a>
      <a class="nonblock nontext clip_frame grpelem shared_content" id="u12195" href="https://www.facebook.com/Spark.app.social" target="_blank" data-muse-uid="U12195" data-muse-type="img_frame" data-content-guid="u12195_content"><!-- image --><img class="block temp_no_img_src" id="u12195_img" data-orig-src="images/facebook.jpg?crc=71469794" alt="" title="Like Us on Facebook" width="45" height="45" data-muse-src="images/facebook.jpg?crc=71469794" src="images/blank.gif?crc=4208392903"/></a>
      <a href="http://www.instagram.com/spark.app" target="_blank" <img class="block temp_no_img_src" id="u12197_img" data-orig-src="images/instagram.jpg?crc=4029373269" alt="" title="Follow Spark on Instagram" width="45" height="45" data-muse-src="images/instagram.jpg?crc=4029373269" src="images/blank.gif?crc=4208392903"/></a>
    </div>
    <div>

      // <h2>Spark <span id="u6362-2">is a </span>FREE <span id="u6362-4">mobile app that makes organising</span> social events <span id="u6362-6">and</span> sharing photos easy.</h2>
      // <a class="block" href="try-it.html" data-href="page:U28929"></a>
      //
      // <img src="images/poll.png?crc=52976405" alt="" width="49" height="49"/>
      // <h3>Poll <span id="u6367-2">to decide what, where and when</span>.</h3>
      //
      // <img class="block temp_no_img_src" id="u6376_img" data-orig-src="images/invite.png?crc=4040777885" alt="" width="49" height="49" data-muse-src="images/invite.png?crc=4040777885" src="images/blank.gif?crc=4208392903"/>
      // <h3><span id="u6375">Invite</span> friends, family <span id="u6375-3">or</span> groups.</h3>
      //
      // <img class="block temp_no_img_src" id="u6380_img" data-orig-src="images/share.png?crc=360734237" alt="" width="49" height="49" data-muse-src="images/share.png?crc=360734237" src="images/blank.gif?crc=4208392903"/>
      // <h3>Easily share <span id="u6379-2">and view the best pictures</span>.</h3>
      //
      // <img class="block temp_no_img_src" id="u6371_img" data-orig-src="images/save.png?crc=3962027088" alt="" width="49" height="49" data-muse-src="images/save.png?crc=3962027088" src="images/blank.gif?crc=4208392903"/>
      // <h3>Save your favourites <span id="u6373-2">to Facebook and more...</span></h3>

    </div>

    <div> //3 images rotating
      // <img class="block temp_no_img_src" id="u12663_img" data-orig-src="images/3album.jpg?crc=219309156" alt="" data-muse-src="images/3album.jpg?crc=219309156" data-image-width="280" data-image-height="499" src="images/blank.gif?crc=4208392903"/>
      // <img class="block temp_no_img_src" id="u12666_img" data-orig-src="images/2-result-vote.jpg?crc=3976126414" alt="" data-muse-src="images/2-result-vote.jpg?crc=3976126414" data-image-width="280" data-image-height="499" src="images/blank.gif?crc=4208392903"/>
      // <img class="block temp_no_img_src" id="u12660_img" data-orig-src="images/1-message.jpg?crc=172429385" alt="" data-muse-src="images/1-message.jpg?crc=172429385" data-image-width="280" data-image-height="499" src="images/blank.gif?crc=4208392903"/>
    </div>

    <div>
     <p>Copyright © 2016 Wanna Enterprises Limited. All rights reserved. Read our <a class="nonblock" href="terms-and-conditions.html" >Terms &amp; Conditions</a> and <a class="nonblock" href="privacy-policy.html" >Privacy Policy</a></p>
    </div>
  </div>
);

export default Home;
