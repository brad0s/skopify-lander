import { useRef } from 'react';
import Brands from './Brands';
import Faq from './Faq';
import Hero from './Hero';
import Points from './Points';
import Quote from './Quote';
import Footer from './Footer';
import Modal from './Modal';

const Shopify = () => {
  const modal = useRef(null);

  const openModal = () => {
    console.log('open modal');
    modal.current.open();
  };

  return (
    <div className="Shopify">
      <Modal ref={modal} />
      <Hero />
      <Points />
      <div className="page-width">
        <Brands />
        <Quote onClick={openModal} />
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Shopify;
