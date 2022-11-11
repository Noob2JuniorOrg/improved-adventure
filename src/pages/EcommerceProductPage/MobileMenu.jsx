import Lightbox from './Lightbox';
import closeIcon from './images/icon-close.svg';
import MobileMenuItem from './MobileMenuItem';

function MobileMenu(props) {
  return (
    <Lightbox className="desktop:hidden">
      <div className="pt-7 pl-6 bg-white h-full w-8/12">
        <button onClick={props.onClose}>
          <img className="mb-9" src={closeIcon} />
        </button>
        <MobileMenuItem name="Collections" />
        <MobileMenuItem name="Men" />
        <MobileMenuItem name="Women" />
        <MobileMenuItem name="About" />
        <MobileMenuItem name="Contact" />
      </div>{' '}
    </Lightbox>
  );
}

export default MobileMenu;
