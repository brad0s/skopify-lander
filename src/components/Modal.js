import {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';

const modalElement = document.getElementById('modal-root');

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  children,
  setShopUrlAnimate,
  shopUrlAnimate,
}) => {
  const [active, setActive] = useState(false);
  const labelAnimation = active ? 'labelAnimation' : '';
  const shopUrlAnimation = shopUrlAnimate ? 'shopUrlAnimation' : '';

  return (
    <div className={`Input Form-field ${labelAnimation} ${shopUrlAnimation}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          if (e.target.value) {
            setActive(true);
            if (setShopUrlAnimate) {
              if (e.target.value.length > 4) {
                console.log('here');
                setShopUrlAnimate(true);
              } else {
                setShopUrlAnimate(false);
              }
            }
          } else {
            setActive(false);
          }
        }}
      />
      {children}
    </div>
  );
};

const Modal = ({ defaultOpen = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [shopUrlAnimate, setShopUrlAnimate] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shopName, setShopName] = useState('');

  const shopUrlElement = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape, false);
    }
    if (shopUrlAnimate && shopUrlElement.current) {
      shopUrlElement.current.style.display = 'inline-block';
      shopUrlElement.current.style.left = '0px';
      shopUrlElement.current.style.paddingLeft = `${shopName.length}ch`;
    }
    if (shopUrlAnimate === false) {
      shopUrlElement.current.style.display = 'none';
      shopUrlElement.current.style.left = 'unset';
      shopUrlElement.current.style.paddingLeft = `unset`;
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen, shopUrlAnimate, shopName.length]);

  return createPortal(
    isOpen ? (
      <div className={`modal`}>
        <div className="container">
          <div className="modal-header">
            <span className="close" onClick={close}>
              <IoMdClose />
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-body-container">
              <h2 className="modal-body-heading">
                Lorem ipsum sit 14-amet elit Skopify
              </h2>
              <form>
                <Input
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  placeholder="Email Address"
                  type="email"
                />
                <Input
                  label="Password"
                  value={password}
                  onChange={setPassword}
                  placeholder="Password"
                  type="password"
                />
                <Input
                  value={shopName}
                  onChange={setShopName}
                  setShopUrlAnimate={setShopUrlAnimate}
                  shopUrlAnimate={shopUrlAnimate}
                  placeholder="Your store name"
                  type="text"
                >
                  <span className="shopUrl">.myshopify.com</span>
                  <span
                    ref={shopUrlElement}
                    className="shopUrl shopUrl-trailing"
                  >
                    .myshopify.com
                  </span>
                  <div className="subtext">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ac turpis egestas sed tempus urna et pharetra.
                    </p>
                  </div>
                </Input>
                <div className="cta-wrapper">
                  <button>Create your store</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) : null,
    modalElement
  );
};

export default forwardRef(Modal);
