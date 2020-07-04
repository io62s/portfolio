import React from "react";
import { Link } from "react-router-dom";
import { useSpring, config } from "react-spring";
import { AboutWrapper, AboutMe } from "../styles/AboutStyles";

const About = () => {
  const aboutSpring = useSpring({
    config: config.gentle,
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <AboutWrapper style={aboutSpring}>
      <h3>About Me</h3>
      <AboutMe>
        <div>
          <p>
            <span>Hello,</span> my name is Branko and I am a Web designer /
            Front-end developer. Currently, I am working as a freelancer and
            have 3 years of working experience at designing and developing
            websites, doing various graphic design projects for a Belgium based
            company. I am quite passionate about technology and have a desire to
            learning new things in order to enhance my skills and abilities for
            further modernistic and personal objectives.
            <br /> Besides work, I enjoy drawing and painting.
          </p>
        </div>
        <div className="right">
          <p>
            You can reach me out by email —{" "}
            <Link className="contact-link" to="/contact">
              <span>bvlajsovic@gmail.com</span>
            </Link>
          </p>
        </div>
      </AboutMe>
    </AboutWrapper>
  );
};

export default About;
