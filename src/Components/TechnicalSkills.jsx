import React from "react";
import { Box, Text, Heading, Image, Divider } from "@chakra-ui/react";
import "../Styles/TechnicalSkills.css";
const TechnicalSkills = () => {
  return (
    <div id="skills" style={{border:"1px solid #fff"}}>
      <br />
      <br />
      <br />
      <br />
      <Box className="techBox1">
        <Text className="tech_text_size">Technical Skills</Text>
        <br />
        <Divider width={"80%"} margin="auto" />
        <br />
      </Box>

      <Box className="techBox2"  >
        <Box className="skills-card" >
      
          <Image 
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224761877-2d73c19c-ba53-4730-8257-8478a0daff9c.png"
            alt="html"
          />
          <br />
        <Text className="skills-card-name"  >HTML</Text>
        </Box>
        

        
        <Box className="skills-card">
          <Image 
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224762373-cebb4e19-d4ee-4880-8de6-17fcb40d3789.png"
            alt="css"
          />
          <br />
          <Text className="skills-card-name">CSS</Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224762582-e1c37065-e3f0-490e-8de9-53279cb49ad4.png"
            alt="js"
          />
          <br />
          <Text className="skills-card-name">Java Script</Text>
        </Box>
        
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224763821-e05a9c0a-c2df-4920-aa16-55f8cac32cc5.png"
            alt="React"
          />
          <br />
          <Text className="skills-card-name">React</Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="chakralogo.png"
            alt="chakra"
          />
          <br />
          <Text className="skills-card-name">Chakra Ui</Text>
        </Box>
      </Box>
      <br />
      <br />
      <Box className="techBox2">
      <Box className="skills-card">
          <Image style={{color:"transparent"}}
            className="skills-card-img"
            src="reduxlogo2.png"
            alt="vercel"
          />
          <br />
          <Text className="skills-card-name">Redux</Text>
        </Box>

      <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://user-images.githubusercontent.com/106021674/224763338-498f7024-2492-4400-8ab9-f063ea404e85.png"
            alt="typescript"
          />
          <br />
          <Text className="skills-card-name">Type Script</Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png"
            alt="express"
          />
          <br />
          <Text className="skills-card-name">Node Js</Text>
        </Box>
        
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
            alt="mongoDB"
          />
          <br />
          <Text className="skills-card-name">mongo DB</Text>
        </Box>
        <Box className="skills-card">
          <Image
            className="skills-card-img"
            src="expresslogo.png"
            alt="express"
          />
          <br />
          <Text className="skills-card-name">Express</Text>
        </Box>
        
        <br />
      </Box>
    </div>
  );
};

export default TechnicalSkills;
