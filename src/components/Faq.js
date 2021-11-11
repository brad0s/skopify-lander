import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineMinusSm } from 'react-icons/hi';

const accordionData = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur?',
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit. Iaculis nunc sed augue lacus viverra. Scelerisque felis imperdiet proin fermentum leo. Iaculis at erat pellentesque adipiscing. Auctor eu augue ut lectus arcu bibendum at varius vel. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Fames ac turpis egestas sed tempus urna.</p>
    <p>Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Fermentum iaculis eu non diam phasellus vestibulum lorem. Enim neque volutpat ac tincidunt vitae semper quis. Libero justo laoreet sit amet cursus sit. Sem et tortor consequat id porta nibh venenatis. Adipiscing bibendum est ultricies integer quis. Augue ut lectus arcu bibendum at varius vel pharetra. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Quam adipiscing vitae proin sagittis. Vitae elementum curabitur vitae nunc sed.</p>`,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur?',
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Tristique magna sit amet purus gravida quis blandit. Iaculis nunc sed augue lacus viverra.</p>`,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur?',
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Tristique magna sit amet purus gravida quis blandit. Iaculis nunc sed augue lacus viverra.</p>
    <p>Scelerisque felis imperdiet proin fermentum leo. Iaculis at erat pellentesque adipiscing.</p>`,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur?',
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit. Iaculis nunc sed augue lacus viverra. Scelerisque felis imperdiet proin fermentum leo. Iaculis at erat pellentesque adipiscing. Auctor eu augue ut lectus arcu bibendum at varius vel. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Fames ac turpis egestas sed tempus urna. </p>`,
  },
];

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={expanded ? 'Accordion expanded' : 'Accordion'}>
      <div className="Accordion--title" onClick={() => setExpanded(!expanded)}>
        <div>{title}</div>
        <div className="icon">
          {expanded ? <HiOutlineMinusSm /> : <HiOutlinePlus />}
        </div>
      </div>
      <div
        className="Accordion--content"
        aria-expanded={expanded}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="Faq">
      <div className="grid">
        <div className="grid--item">
          <h2>FAQs</h2>
          <div className="list">
            {accordionData.map((item, index) => (
              <Accordion
                title={item.title}
                content={item.content}
                key={`${item.title}${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
