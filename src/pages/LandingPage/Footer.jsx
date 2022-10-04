import Logo from './Logo';
import Navigation from './Navigation';
import Socials from './Socials';

function Footer() {
  return (
    <footer className="bg-black text-white font-loopsmall py-14 mt-24 desktop:px-40 desktop:flex desktop:justify-between">
      <div>
        <Logo className="m-auto mb-7 desktop:m-0" />
        <Navigation className="mt-0" />
      </div>
      <div className="desktop:flex desktop:flex-col desktop:items-end">
        <Socials className="m-auto mt-12 desktop:m-0" />
        <p className="text-center mt-5 opacity-50">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
