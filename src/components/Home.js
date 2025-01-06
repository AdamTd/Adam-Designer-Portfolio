import logo from "../assets/images/logo.png";
import graphic_design from "../assets/icons/pattern-graphic-design.svg";
import ui_ux from "../assets/icons/pattern-ui-ux.svg";
import apps from "../assets/icons/pattern-apps.svg";
import illustrations from "../assets/icons/pattern-illustrations.svg";
import photography from "../assets/icons/pattern-photography.svg";
import motion_graphics from "../assets/icons/pattern-motion-graphics.svg";

function Home() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <button className="btn">Free consultation</button>
      </nav>
      <div className="header">
        <h1>Design solutions made easy</h1>
        <p>
          With over ten years of experience in various design disciplines, I am
          your one-stop shop for your design needs.
        </p>
      </div>
      <div className="skills">
        <div className="skill_1 skill">
          <img src={graphic_design} alt="graphic_design" />
          <h2>Graphic Design</h2>
        </div>
        <div className="skill_2 skill">
          <img src={ui_ux} alt="ui_ux" />
          <h2>UI/UX</h2>
        </div>
        <div className="skill_3 skill">
          <img src={apps} alt="apps" />
          <h2>Apps</h2>
        </div>
        <div className="skill_4 skill">
          <img src={illustrations} alt="illustrations" />
          <h2>Illustrations</h2>
        </div>
        <div className="skill_5 skill">
          <img src={photography} alt="photography" />
          <h2>Photography</h2>
        </div>
        <div className="skill_6 skill">
          <img src={motion_graphics} alt="motion_graphics" />
          <h2>Motion Graphics</h2>
        </div>
      </div>
    </>
  );
}
export default Home;
