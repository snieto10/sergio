import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../images";

function Slider2() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="App">
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carrousel"
          >
            {images.map((image) => {
              return (
                <motion.div key={Math.random()} className="item">
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Slider2;
