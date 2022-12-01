import style from "./Footer.module.css";
import { ReactComponent as LinkedinLogo } from "./linkedin-logo.svg";
import { ReactComponent as WhatsappLogo } from "./whatsapp-logo.svg";
import { ReactComponent as EmailIcon } from "./email-icon.svg";
import { ReactComponent as GithubLogo } from "./github-logo.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contacts}>
          <div className={style.linkedin}>
            <a href="https://www.linkedin.com/in/kenneth-vincent-kwandou">
              <LinkedinLogo title="Linkedin Logo" />
              <p>kenneth-vincent-kwandou</p>
            </a>
          </div>
          <div className={style.phone}>
            <a href="https://api.whatsapp.com/send?phone=6282233557738">
              <WhatsappLogo title="Whatsapp Logo" />
              <p>+6282233557738</p>
            </a>
          </div>
          <div className={style.email}>
            <a href="mailto:kennethkwandou@gmail.com">
              <EmailIcon title="Email Icon" />
              <p>kennethkwandou@gmail.com</p>
            </a>
          </div>
          <div className={style.github}>
            <a href="https://github.com/Kennethvk">
              <GithubLogo title="GitHub Logo" />
              <p>Kennethvk</p>
            </a>
          </div>
        </div>
        <div className={style.copyright}>
          <p>Kenneth Vincent Kwandou &#169; 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
