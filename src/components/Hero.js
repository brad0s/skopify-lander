import { useState } from 'react';
import { FaShopify } from 'react-icons/fa';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [labelAnimate, setLabelAnimate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for clicking the button! The email you entered is ${email}.`);
  };

  return (
    <section className="Shopify__hero">
      <div>
        <FaShopify />
        Skopify
      </div>
      <div className="grid">
        <div className="grid--item">
          <h1>Sante in nib Skopify</h1>
          <p className="subtitle">
            Montes nascetur 1,700,000 ridiculus mus mauris
          </p>
        </div>
        <div className="grid--item">
          <form
            onSubmit={handleSubmit}
            className={labelAnimate ? `labelAnimation` : undefined}
          >
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value) {
                  setLabelAnimate(true);
                } else {
                  setLabelAnimate(false);
                }
              }}
            />
            <button>Start free trial</button>
          </form>
        </div>
        <div className="grid--item">
          <p className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            turpis egestas sed tempus urna et pharetra.
          </p>
        </div>
        <div className="grid--item">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/landers/short-lander/free-trial/storefront-illustration@mobile-cd49a37e1e5e153e43ca57891bd3f327ff19f1fe139517ad4fbcf2d83388ae23.png"
            alt="storefront"
            className="storefront"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
