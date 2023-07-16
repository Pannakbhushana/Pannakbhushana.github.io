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
          
          <p className={styles.aboutME_p} >
            <br />
            🔸Worked on different projects as leader and co-leader. 🔸
            <br />
            <br />
            🔸 Keen to find a challenging position within an ambitious
            company.🔸
            <br />
            <br />
            🔸 Interested in learning and absorbing new tech in the growing world.
            <br />
            <br />
            🔸Innovative, result-driven Web Developer with sound knowledge in
            JavaScript and React in the Frontend.
            <br />
            <br />
            🔸For Backend I have a prior knowledge of Node.JS,express,mongoDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
