import React from 'react';
import { render } from 'react-dom';
import { H2, H3, H4, P, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const Privacy = () => (
  <div>
    <div className="Home">
      <div className="Home-header">
        <H3>Our Privacy Policy</H3>
        <P>nbsp;</P>
      </div>

      <div>

        <H4>Website, App Privacy and cookies policy</H4>

        <P>{`This is the privacy and cookies policy for www.spark-app.net and the Spark application. For the purposes of this privacy policy, both the website and application shall be referred to as the 'App'. The App is operated by Wanna Enterprises Ltd, trading as Wanna (we, us and our).`}</P>
        <P>{`We are committed to protecting your privacy online. We appreciate that you do not want the personal information you provide to us distributed indiscriminately and here we explain how we collect information, what we do with it and what controls you have.`}</P>
        <P>{`By using the App, you consent to the collection and use of information in accordance with this privacy policy.`}</P>
        <P>{`We reserve the right to change this privacy policy from time to time by changing it on the App. This privacy policy was last updated on December 7, 2015.`}</P>
        <P>nbsp;</P>

        <H4>Information we may collect from you</H4>
        <P>{`We may collect and process the following information about you:`}</P>
        <P>{`information (such as your name, email address, postal address and telephone number) that you provide by completing forms on the App, including if you register as a user of the App, subscribe to any service, upload or submit any material via the App, request any information or enter into any competition or promotion we may sponsor; in connection with an account sign-in facility, your password and log-in details; your preferences, which helps us provide you with more tailored offers; details of any transactions made by you through the App; communications you send to us, for example to report a problem or to submit queries, concerns or comments regarding the App or its content; information from surveys that we may, from time to time, run on the App for research purposes, if you choose to respond to them; details of your visits to the App, the resources you access and any data you download; if you make any purchases, your financial information (like your credit or debit card numbers); non-personal data. For purposes of this privacy policy, “non-personal data” means information that does not directly identify you. Additionally, non-personal data means “aggregate” and “de-personalized” information, which is data we collect about the use of Spark's services, from which any personally identifiable data has been removed. We may use tools or third party analytical software to automatically collect and use certain non-personal data that does not directly enable us to identify you. The types of non-personal data we may collect and use include, but are not limited to: (i) device properties, including, but not limited to IP address, Media Access Control (“MAC”) address and unique device identifier or other device identifier ('UDID'); (ii) device software platform and firmware; (iii) mobile phone carrier; (iv) geographical data such as post code and coarse location; (v) other non-personal data as reasonably required by Spark to enhance our products and services. information obtained from your social networking profile, if you log-in via a social networking site. You are under no obligation to provide any such information. However, if you should choose to withhold requested information, we may not be able to provide you with certain services.`}</P>
        <P>nbsp;</P>

        <H4>Uses made of your information</H4>
        <P>{`We will use the information you provide to:`}</P>
        <P>{`help us to build a profile of your preferences so we can offer you events and services you are interested in; enable us to process your orders and to provide you with the services and information offered through the App and which you request; administer your account with us; verify and carry out financial transactions in relation to payments you make through the App; share with third parties necessary to process your transactions with us, such as credit card companies, banks and ticket dispatchers; share with our merchants for the purposes of redeeming the tickets you purchase from the App; exchange information with other companies for fraud protection and credit risk reduction; contact you by post, phone or email when necessary to discuss the transactions entered into by you on the App; audit the downloading of data from the App; improve the layout and/or content of the pages of the App and customise them for users; identify visitors to the App; carry out research on our users' demographics and tracking of sales data; share with social networking sites at your request; and disclose to lawful authorities when required to do so by law. We will also use information you provide to us for the purposes of contacting you with information or offers regarding upcoming events, products, services or surveys. This shall only be done with your consent and our direct marketing policy which is explained in full below.`}</P>
        <P>nbsp;</P>

        <H4>Additional information</H4>
        <P>{`When you visit the App, we may automatically collect additional information about you, such as the type of phone or operating system you use and, if you came to the website, the type of internet browser you use and the website from which you have come to the site. Also, depending on whether you access Spark on your PC or via your mobile device, we will collect your IP address (the unique address which identifies your home computer on the internet) or the unique identifier (which is linked to your mobile device) which are automatically recognised by our servers. You cannot be identified solely from this information and it is only used to assist us in providing an effective service on the App and to collect broad demographic information for aggregate use.`}</P>
        <P>{`The website uses cookies to store certain information. Cookies are pieces of information that a website transfers to your hard drive to store and sometimes track information about you. Although they do identify a user's device, cookies do not personally identify users. Cookies are specific to the server that created them and cannot be accessed by other servers, which means they cannot be used to track your movements around the internet.`}</P>
        <P>{`For more information about how we use cookies and other tracking devices, please refer to our Cookie Policy.`}</P>
        <P>nbsp;</P>

        <H4>Information sharing</H4>
        <P>{`We may disclose aggregate statistics about visitors to the App, customers and sales in order to describe our services to prospective partners, advertisers, potential merchants and other reputable third parties and for other lawful purposes, but these statistics will include no personally identifiable information.`}</P>
        <P>{`We may disclose your personal information to any of our affiliates, merchants, or to our agents or contractors who assist us in providing the services we offer through the App, processing transactions, fulfilling requests for information, receiving and sending communications, updating marketing lists, analysing data, providing support services or in other tasks, from time to time. Our agents and contractors will only use your information to the extent necessary to perform their functions.`}</P>
        <P>{`In the event that we undergo re-organisation or are sold to a third party, you agree that any personal information we hold about you may be transferred to that re-organised entity or third party.`}</P>
        <P>{`We may disclose your personal information if required to do so by law or if we believe that such action is necessary to prevent fraud or cyber crime or to protect the App or enforce the terms under which you transact with us or enforce the rights, property or personal safety of any person.`}</P>
        <P>nbsp;</P>

        <H4>Public forums</H4>
        <P>{`The App may, from time to time, make public forums available to its users. Any information that is disclosed in these areas becomes public information and you should exercise caution when using these and never disclose your personal information.`}</P>
        <P>nbsp;</P>

        <H4>External links</H4>
        <P>{`The App may, from time to time, contain links to external sites. We are not responsible for the privacy policies or the content of such sites.`}</P>
        <P>nbsp;</P>

        <H4>Marketing to you</H4>
        <P>{`We may send you information we think you may find useful or which you have requested from us by push notification and/or (if you provide us with your e-mail address) by e-mail, including information about the latest or upcoming events featured on the App, provided you have indicated that you do not object to being contacted for these purposes and we will always give you the option to opt-out of receiving further e-mails or push notifications by following the unsubscribe instructions on any communications sent to you.`}</P>
        <P>{`Additionally we may allow our merchants, and if you consent by opting-in to receive such information and offers, other carefully selected third parties, to send you information directly which you may find useful regarding their products and services.`}</P>
        <P>{`You can tell us not to contact you with information regarding the products or services of third parties, or to share your details with third parties so that they can directly send you information regarding their products and services, either at the point such information is collected on the App (by checking the relevant box), or where you do not wish us to continue to use your information in this way by following the unsubscribe instructions on any communications sent to you.`}</P>
        <P>{`You can also exercise this right at any time by contacting us using the contact details at the end of this privacy policy.`}</P>
        <P>{`When you organise an event through Spark, you may at that time be offered an opportunity to purchase third party products or services or enter third party promotions or loyalty programmes. If you expressly consent to purchase those products or services or enter into the promotions or programmes you authorise us to share your name, e-mail address and, where necessary and only where you have consented for us to do so, your financial and billing details with that third party merchant. The use of your personal information will be governed by the terms of that merchant's own terms of supply and privacy policy, so ensure that you read the relevant terms and privacy policy carefully before you agree to purchase from, or participate with that third party merchant.`}</P>
        <P>nbsp;</P>

        <H4>Your location data</H4>
        <P>{`In order to get the most out of our service and to allow us to provide you with tailored offers, we need to process your approximate location from time to time. The types of location data that will be processed are your latitude, longitude, cell tower ID, etc. Your location data will only be processed for as long as necessary in order for us to respond to your request for tailored offers. After this the data will be deleted. The location data may be transferred to our merchants for the purpose of providing you with the best offers at that time to match your preferences.`}</P>
        <P>{`You can choose not to allow us to process your approximate location at the time you connect to the app, or any time after that either by changing the settings on your mobile device or by contacting us using the contact details at the end of this privacy policy. Please note that if you choose not to allow us to process your location data, we will not have enough data in order to provide you with the full benefit of our service (e.g. a list of tailored offers matched to your approximate location).`}</P>
        <P>nbsp;</P>

        <H4>Security</H4>
        <P>{`We place great importance on the security of all personally identifiable information associated with our users. We have security measures in place to attempt to protect against the loss, misuse and alteration of personal information under our control. For example, our security and privacy policies are periodically reviewed and enhanced as necessary and only authorised personnel have access to personal information. Whilst we cannot ensure or guarantee that loss, misuse or alteration of information will never occur, we use all reasonable efforts to prevent it.`}</P>
        <P>{`You should bear in mind that submission of information over the internet is never entirely secure. We cannot guarantee the security of information you submit via the App whilst it is in transit over the internet and any such submission is at your own risk.`}</P>
        <P>nbsp;</P>

        <H4>Storage of your information</H4>
        <P>{`Information that you submit via the App is sent to and stored on secure servers located in the United Kingdom and other European Economic Area countries. This is necessary in order to process the information. Information submitted by you may be transferred by us to our other offices and/or to the third parties mentioned in the circumstances described above, which may be situated outside the European Economic Area and may be processed by staff operating outside the European Economic Area. By submitting information via the App, you agree to this storing, processing and/or transfer.<br/><br/>`}</P>

        <H4>Your rights</H4>
        <P>{`You have a legal right under the Data Protection Act 1998 to a copy of all the personal information about you held by us. On request, we will provide you with a copy of this information subject to a fee not exceeding £10. You also have a right to correct any errors in that information. As mentioned above, you have a right to prevent the use of your personal information for direct marketing purposes.`}</P>
        <P>nbsp;</P>

        <H4>Spark Cookies Policy</H4>
        <P>{`When you interact with the App, we try to make that experience simple and meaningful. When you visit our App our Web server sends a cookie to your computer or mobile device (depending on how you access the site). Cookies are small pieces of information which are issued to your computer when you visit a website and which store and sometimes track information about your use of the site. A number of cookies we use last only for the duration of your web session and expire when you close your App. These are known as session cookies. Other cookies are used to remember you when you return to the App and will last for longer. These are known as persistent cookies.`}</P>
        <P>{`We use cookies to: remember that you have visited us before; this means we can identify the number of unique visitors we receive. This allows us to make sure we have enough capacity for the number of users that we get; customise elements of the promotional layout and/or content of the pages of the site; and collect statistical information about how you use the site so that we can improve the site and learn which parts of the website are most popular to visitors. Some of the cookies used by our App are set by us, and some are set by third parties who are delivering services on our behalf. For example, social networking sites.`}</P>
        <P>{`Most web browsers automatically accept cookies but, if you prefer, you can change your browser to prevent that or to notify you each time a cookie is set. You can also learn more about cookies by visiting www.allaboutcookies.org which includes additional useful information on cookies and how to block cookies using different types of browser. Please note however, that by blocking or deleting cookies used on the site you may not be able to take full advantage of the App if you do so.`}</P>
        <P>{`In addition to cookies, tracking Gifs may be set by us or third parties in respect of your use of the site. Tracking Gifs are small image files within the content of our site or the body of our newsletters so we or third parties can understand what parts of the website are visited or whether particular content is of interest.`}</P>
        <P>{`Please also look at our privacy policy which gives details about how we use any personal information you give us.`}</P>
        <P>nbsp;</P>

        <H4>Contacting us</H4>
        <P>{`Please submit any questions, concerns or comments you have about this privacy policy or any requests concerning your personal data by email to info@spark-app.net.`}</P>

      </div>

    </div>

  </div>

);

export default Privacy;
