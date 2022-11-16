import style from "./Banner.module.css";
import Button from "../layout/Button";
import image from "./banner-photo.jpg";
import cv from "./kenneth-vincent-kwandou-cv.pdf";

function Banner() {
  return (
    <section className={style.banner}>
      <div className={style.intro}>
        <p>
          <span>Hello,</span> my name is
        </p>
        <h1>Kenneth Vincent Kwandou</h1>
        <p>
          A <span>Full Stack Developer</span>
        </p>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          <Button>Check my CV here</Button>
        </a>
      </div>
      <div className={style.image}>
        <img src={image} alt="My Profile"></img>
      </div>
    </section>
  );
}

export default Banner;
