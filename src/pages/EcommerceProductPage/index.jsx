import Header from './Header';
import Carousel from './Carousel';
import Description from './Description';
import MobileMenu from './MobileMenu';
import Gallery from './Gallery';
import DesktopModal from './DesktopModal';

import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import pic1 from './images/image-product-1.jpg';
import pic2 from './images/image-product-2.jpg';
import pic3 from './images/image-product-3.jpg';
import pic4 from './images/image-product-4.jpg';

import thumb1 from './images/image-product-1-thumbnail.jpg';
import thumb2 from './images/image-product-2-thumbnail.jpg';
import thumb3 from './images/image-product-3-thumbnail.jpg';
import thumb4 from './images/image-product-4-thumbnail.jpg';

function EcommerceProductPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openMenuHandler = () => {
    setMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setMenuOpen(false);
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <Provider store={store}>
      <div className="relative font-ecom pb-16 desktop:pb-40 desktop:px-[165px]">
        {menuOpen && <MobileMenu onClose={closeMenuHandler} />}
        {modalOpen && (
          <DesktopModal
            images={[pic1, pic2, pic3, pic4]}
            thumbnails={[thumb1, thumb2, thumb3, thumb4]}
            onClose={closeModalHandler}
          />
        )}

        <Header onOpenMenu={openMenuHandler} />
        <Carousel images={[pic1, pic2, pic3, pic4]} />

        <div className="desktop:flex desktop:px-10 desktop:items-center desktop:justify-between">
          <Gallery
            onOpenModal={openModalHandler}
            images={[pic1, pic2, pic3, pic4]}
            thumbnails={[thumb1, thumb2, thumb3, thumb4]}
          />
          <Description
            company="Sneaker company"
            title="Fall Limited Edition Sneakers"
            description="These low-profile sneakers are your perfect
casual wear companion. Featuring a durable
rubber outer sole, they'll withstand everything
the weather can offer."
            oldPrice="250"
            discount="50"
            thumbnail={thumb1}
          />
        </div>
      </div>
    </Provider>
  );
}

export default EcommerceProductPage;
