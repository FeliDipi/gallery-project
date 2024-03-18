import { motion, AnimatePresence } from "framer-motion";

import { useGallery } from "../hooks/useGallery.js";

import Pagination from "./Pagination.jsx";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Gallery = ({children, className, autoDelay = 5000, loop = false}) =>
{
  const {currentIndex, setIndex, dragX, onDragEnd} = useGallery({length:children.length, autoDelay, loop});

  const mainStyle = `gallery center ${className}`

  return (
    <AnimatePresence>
      <div className={mainStyle}>
        <div className="gallery-content">
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${currentIndex * 100/children.length}%`,
            }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="gallery-slide center"
          >
            {
              children
            }
          </motion.div>
        </div>
        <Pagination length={children.length} currentIndex={currentIndex} setIndex={setIndex}/>
      </div>
    </AnimatePresence>
  );
}

export default Gallery;