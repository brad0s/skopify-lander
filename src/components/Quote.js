const Quote = ({ onClick }) => {
  return (
    <section className="Quote">
      <div className="grid">
        <div className="wrapper">
          <blockquote>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </blockquote>
          <cite>dignissim convallis aenean et tortor</cite>
        </div>
        <div>
          <button onClick={onClick}>Start Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default Quote;
