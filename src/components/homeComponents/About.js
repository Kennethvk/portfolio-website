import style from "./About.module.css";
import image from "./about-photo.jpg";

function About() {
  return (
    <section className={style.section}>
      <div className={style.about}>
        <div className={style.image}>
          <img src={image} alt="About Me"></img>
        </div>
        <div className={style.text}>
          <h2>About me</h2>
          <p>
            I am a programmer who loves challenges and enjoy solving problems.
            It feels satisfying to use my programming skills to develop
            something from scratch. This feeling drives me to keep learning more
            and improving myself as a programmer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
