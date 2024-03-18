import Dot from "./Dot.jsx";

const Pagination = ({ length, currentIndex, setIndex }) => 
{
  const createDots = () =>
  {
    let dots = [];

    for(let i=0;i<length;i++)
    {
      dots.push(<Dot key={i} handleOnPagination={setIndex} isCurrent={i===currentIndex}/>);
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

export default Pagination;