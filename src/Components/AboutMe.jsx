import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import "../Styles/AboutMe.css";
import rahul from "../Images/rahul.png";
import resume from "../resume/Rahul-Kumar-Mishra-Resume.pdf";
const AboutMe = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1DoSowad6G171ACJ3dw63Z8z6TWztbbEm/view?usp=share_link"
    );
  };
  return (
    <Box style={{ marginTop: "20px" }} className="about section" id="home" >
      <Box >
        <br />
        <Flex className="block" style={{ margin: "auto", width: "80%" }}>
          <Box className="mainBox1" width={"70%"} >
            <Box
              style={{
                width: "100%",
                margin: "auto",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Text className="name_Text" id="user-detail-name" >
                Hello <span>!</span> <br className="brk" /> I Am{" "}
                <span  className="nameAbout" >
                  Rahul Kumar Mishra
                </span>
                <br /> <span  className="nameAbout2">Full Stack web developer </span> 
                <br /> 👋👋👋
              </Text>
              <Text>
                <p id="user-detail-intro" className="aboutME_p" style={{textAlign:"justify"}} >
                  A self-motivated hard-working and ambitious Full Stack Web
                  Developer with proficiency in Data Stucture And Algorithms.
                  Problem-solving mindset and ability to perform well in
                  collaboration hours of coding and hands-on experience in
                  developing six fully functioning projects. 100+hour of holistics
                  development which help in developing about 30 mini
                  projects.Looking forward to work as accountable and competent
                  employee in a tech company

                </p>
              </Text>
            </Box>
            <br />
            <br />
            <Button className="resume_Btn" id="resume-link-1" onClick={handleResume} >
              <a
                id="resume-button-2"
                href={resume}
                download="Rahul-Kumar-Mishra-Resume"
                rel="noreferrer"
                target="_blank"
              >
                <p>Resume</p>
              
              </a>
            </Button>
          </Box>
          <Box className="mainBox2" >
            <Image className="home-img" src={rahul} alt="Image" />
          </Box>
        </Flex>
      </Box>
    
    </Box>
  );
};

export default AboutMe;
