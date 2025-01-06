import profile from "../assets/images/image-amy.webp";
function About() {
  return (
    <>
      <div className="about">
        <img src={profile} alt="profile" />
        <div className="about__me">
          <h2>I'm Amy, and I'd love to work on your next project</h2>
          <p>
            I love working with others to create beautiful design solutions. I
            have designed everything from brand illustrations to complete mobile
            apps. I am also handy with a camera!
          </p>
          <button className="btn">Free consultation</button>
        </div>
      </div>
    </>
  );
}
export default About;
