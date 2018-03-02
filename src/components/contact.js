import React from 'react';
import { render } from 'react-dom';
import { H2, H3, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const Contact = () => (
  <div>
    <div className="Contact">
      <div className="Contact-header">
        <H2>Contact us</H2>
      </div>

      <div className="Contact-header">

        <h4>Keep in touch!</h4>
        <p>If you’d like to know more about Spark, would like to be involved in our project, or just want to say hello, please email us:</p>
        <p><a href="mailto:hello@spark-app.net">hello@spark-app.net</a></p>
        <p>Or join us on:</p>

      </div>

    </div>
  </div>
);

export default Contact;
