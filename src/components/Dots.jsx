const Dots = ({ length, currentIndex, setIndex }) => 
{
  const createDots = () =>
  {
    let dots = [];

    for(let i=0;i<length;i++)
    {
      dots.push(
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`dot ${i === currentIndex ? "dot-selected":""}`}
        ></button>
      );
    };

    return dots;
  }

  return (
    <div className="dots center">
      <div className="dots-slide center">
        {
          createDots()
        }
      </div>
    </div>
  );
};

export default Dots;