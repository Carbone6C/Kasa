/* import { useState } from 'react' */
import rightarrow from '../../assets/right_arrow.png'
import leftarrow from '../../assets/left_arrow.png'
import './_banner.scss'

function Banner() {
  /*  const [pos, setPos] = useState(0);

    const updateCarrousel = (position) => {
      setPos(position);
    };
  
    const handleArrowLeftClick = () => {
      const newPosition = pos === 0 ? slides.length - 1 : pos - 1;
      updateCarrousel(newPosition);
    };
  
    const handleArrowRightClick = () => {
      const newPosition = pos === slides.length - 1 ? 0 : pos + 1;
      updateCarrousel(newPosition);
    }; */

  return (
    <div className="banner">
      <img
        src={leftarrow}
        className="banner__arrow banner__arrow--left"
        /* onClick={handleArrowLeftClick} */
      />
      <img
        src={rightarrow}
        className="banner__arrow banner__arrow--right"
        /* onClick={handleArrowRightClick} */
      />
      {/* <div className="banner__indicator">{`${pos + 1}/${slides.length}`}</div> */}
    </div>
  )
}

export default Banner
