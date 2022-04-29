import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://drive.google.com/file/d/1W_pHSu348E8v8ddluvFQ-uACReThUqlt/view?usp=drivesdk" // my Picture
      : "https://cdn2.careeraddict.com/uploads/article/58447/illustration-woman-desk-computers.jpg";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://cdn2.careeraddict.com/uploads/article/58447/illustration-woman-desk-computers.jpg"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello! Everyone I am Abhishek Pandey .
          <br />A highly dedicated and passionate full-stack web developer with
          excellent administrative and communication skills and the ability to
          write efficient code. Self motivated, quick-learner and curious with
          proficiency in MERN stack.
          <span style={{ color: `#00a0a0` }}>
            {" "}
            Adaptive to new technology and environment.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
