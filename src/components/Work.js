import slide_1 from "../assets/images/image-slide-1.jpg";
import right_icon from "../assets/icons/icon-arrow-right.svg";
import left_icon from "../assets/icons/icon-arrow-left.svg";
function Work() {
  return (
    <>
      <div className="work">
        <h2>My Work</h2>
        <img src={slide_1} alt="slide_1" />
        <div className="work__btn">
          <button className="btn">
            <img src={left_icon} alt="left_icon" />
          </button>
          <button className="btn">
            <img src={right_icon} alt="right_icon" />
          </button>
        </div>
      </div>
    </>
  );
}
export default Work;
