import { motion } from "framer-motion";
import Dot from "./Dot.jsx";
import { useEffect, useRef, useState } from "react";

const Pagination = ({ length, currentIndex, setIndex }) => 
{
  const ref = useRef(null);
  const [x, setX] = useState(0);

  const createDots = () =>
  {
    let dots = [];

    for(let i=0;i<length;i++)
    {
      dots.push(<Dot handleOnPagination={setIndex} isCurrent={i===currentIndex}/>);
    };

    return dots;
  }

  console.log(currentIndex);

  useEffect(()=>
  {
    if(currentIndex <= 2)
    {
      setX(ref.current.clientWidth/length * 0);
    }
    else if(currentIndex >= length-3)
    {
      setX(ref.current.clientWidth/length * (length-3));
    }
    else
    {
      setX(ref.current.clientWidth/length * (currentIndex-1));
    }
  },[currentIndex])

  return (
    <div className="dots center">
      <motion.div 
        ref={ref}
        animate={{
          translateX: `-${x}px`,
        }}
        className="dots-slide center"
      >
        {
          createDots()
        }
      </motion.div>
    </div>
  );
};

export default Pagination;