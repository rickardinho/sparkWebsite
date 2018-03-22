import React from 'react';
import GooglePlayIcon from './../../images/icons/google-play-badge.png';
import { Img } from './../../styles/styles';

const GooglePlay = () => {

    return (
        <a href='https://play.google.com/store/apps/details?id=net.wannaenterprises.spark&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><Img alt='Get it on Google Play' src={GooglePlayIcon} /></a>
    );
};

export default GooglePlay;
