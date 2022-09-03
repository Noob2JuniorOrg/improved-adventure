import facebookIcon from './images/icon-facebook.svg';
import twitterIcon from './images/icon-twitter.svg';
import pinterestIcon from './images/icon-pinterest.svg';
import instagramIcon from './images/icon-instagram.svg';
import SocialIcon from './SocialIcon';

function Socials(props) {
  return (
    <div className={`${props.className} flex justify-between w-36`}>
      <SocialIcon image={facebookIcon} />
      <SocialIcon image={twitterIcon} />
      <SocialIcon image={pinterestIcon} />
      <SocialIcon image={instagramIcon} />
    </div>
  );
}

export default Socials;
