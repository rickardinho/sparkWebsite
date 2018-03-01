import React from 'react';
import { render } from 'react-dom';
import { FooterWrapper, SocialDiv, SocialButton } from './../../styles/styles';
import twitterImage from './../../images/twitter.jpg';
import facebookImage from './../../images/facebook.jpg';
import instagramImage from './../../images/instagram.jpg';

const Footer = () => (
  <FooterWrapper>

    <SocialDiv>

      <SocialButton href="http://www.twitter.com/SparkAppSocial" ><img src={twitterImage} alt="" title="Follow Spark on Twitter" width="45" height="45" /></SocialButton>
      <SocialButton href="https://www.facebook.com/Spark.app.social" ><img src={facebookImage} alt="" title="Like Us on Facebook" width="45" height="45" /></SocialButton>
      <SocialButton href="http://www.instagram.com/spark.app" ><img src={instagramImage} alt="" title="Follow Spark on Instagram" width="45" height="45" /></SocialButton>

    </SocialDiv>

    <p>Copyright © 2016 Wanna Enterprises Limited. All rights reserved.</p>
    <p>Read our <a class="nonblock" href="terms-and-conditions.html" >Terms &amp; Conditions</a> and <a class="nonblock" href="privacy-policy.html" >Privacy Policy</a></p>

  </FooterWrapper>
);

export default Footer;
