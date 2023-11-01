import React from "react";
import styles from "../Styles/Home.module.css";
import {Text,Divider} from "@chakra-ui/react";
const About = () => {
  return (
    <div id="about" className="about section" style={{marginTop:"-80px"}}>
      <div id={styles.aboutContainer} >
       
        <Text className="about_me_heading">About Me</Text>
      <br />
      <Divider width={"80%"} margin={"auto"} />

        <div id="user-detail-intro" className={styles.aboutme}>
          <br />
          <br />
          <p className={styles.aboutME_p} style={{textAlign:"justify",lineHeight:"40px"}} >
          I am a results-oriented web developer with a strong background in frontend technologies such as HTML, CSS, JavaScript and React. 
          My proficiency extends to backend development, where I work with Node.js, Express, and MongoDB to create scalable and 
          efficient web applications. I am passionate about embracing new technologies and methodologies, ensuring that 
          I stay up-to-date with the latest trends in the industry. Driven by a commitment to excellence, I am dedicated to
           producing high-quality solutions. My collaborative nature enables me to work effectively in diverse teams, 
           where I contribute my technical expertise to achieve common goals. I am enthusiastic about joining an 
           innovative company where my skills can be harnessed to drive impactful projects and foster a culture of 
           continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
