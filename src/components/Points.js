import { HiTemplate } from 'react-icons/hi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';

const Points = () => {
  return (
    <section className="Points">
      <div className="Points--wrapper">
        <div className="grid">
          <div className="grid--item">
            <HiTemplate className="icon" />
            <h2>Commodo Viverra</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid--item">
            <FaMoneyBillAlt className="icon" />
            <h2>Laoreet Sit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid--item">
            <HiUserGroup className="icon" />
            <h2>In iaculis maecenas accumsan lacus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;
