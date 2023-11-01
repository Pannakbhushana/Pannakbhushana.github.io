import { Box, SimpleGrid, Text, Stack, Heading,Divider } from "@chakra-ui/react";
import Drawer from "./Drawer";
import ProjectsCard from "./ProjectsCard";
import '../Styles/Project.css'
const ProjectsDetails = [
  {
    IMAGE: "one-store.png",
    NAME: "OneStore",
    TECHSTACK: [
      "React",
      "Redux",
      "CkakraUi",
      "Json",
    ],
    DISCRIPTION:
      `Meesho is India's largest and most trusted marketplace for
      Resellers, who sell products online through WhatsApp and
      Facebook`,
    GITHUB: "https://github.com/Pannakbhushana/Meesho-Clone",
    DEPLOY: "https://storied-blini-63970f.netlify.app/",
  },

  {
    IMAGE: "reg-stuff.png",
    NAME: "Reg-Stuff",
    TECHSTACK: [ "React.JS", "Redux","Express.js","MongoDB"],
    DISCRIPTION:
      ` Reg-Stuff is a design obsessed lifestyle accessories brand, 
      committed to make your every day carry #lessordinary`,
    GITHUB: "https://github.com/Pannakbhushana/reg-stuff",
    DEPLOY: "https://regstuff.vercel.app/",
  },
  {
    IMAGE: "amezon-img.png",
    NAME: "Kalp-Taru",
    TECHSTACK: ["React", "Redux", "ChakraUI", "JavaScript"],
    DISCRIPTION:
      `cloned Amazon website which is an American multinational technology 
      company focusing on e-commerce, cloud computing, online advertising, 
      digital streaming and artificial intelligence.`,
    GITHUB: "https://github.com/Pannakbhushana/amezon-clone",
    DEPLOY: "https://taupe-salamander-d7555e.netlify.app/",
  },

  {
    IMAGE: "fresh-aahar.png",
    NAME: "Fresh Aahar",
    TECHSTACK: ["HTML", "CSS", "JavaScript","Json"],
    DISCRIPTION:
      `Fresh Aahar is meat-free lifestyle platform. Which provide an effective 
      platform to promote compassionate dining in a fun and effective way, that would allow you to save precious animal lives.
      `,
    GITHUB: "https://github.com/Pannakbhushana/Fresh-Ahaar",
    DEPLOY: "https://fascinating-smakager-637686.netlify.app/",
  },

  {
    IMAGE: "youtubeImg.png",
    NAME: "MyTube",
    TECHSTACK: ["HTML", "CSS", "JavaScript","Api"],
    DISCRIPTION:
      `MyTube is a clone of YouTube which is an American online video sharing and social media platform headquartered in San Bruno, 
      California, United States. Accessible worldwide`,
    GITHUB: "https://github.com/Pannakbhushana/youtube",
    DEPLOY: "https://frolicking-caramel-76c661.netlify.app/",
  },

  {
    IMAGE: "beekin.png",
    NAME: "Beekin-Job",
    TECHSTACK: ["React", "Redux", "Express.js","MongoDB"],
    DISCRIPTION:
      `Beekin-Job is your go-to job search app, streamlining the process of finding your ideal job. 
      With smart filters and instant updates, discover tailored job listings effortlessly. 
      Your future career starts here.`,
    GITHUB: "https://github.com/Pannakbhushana/job-search-app",
    DEPLOY: "https://hilarious-madeleine-12f733.netlify.app/",
  },
];

export default function SimpleThreeColumns() {


  return (
    <>
    <Box p={4} id="projects">
      <div className="contact-name">
        <span className="dash"></span>
        <h2 className="contact_heading">Projects</h2>
        <span className="dash"></span>
      </div>
      <Divider width={"80%"} margin={"auto"} />

      {/* <Stack w={"50%"} m={"auto"} align={"center"} justifyContent={"center"}>
        <Text color={"#2b6cb0"}>MY WORK</Text>
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}>
          Creative Projects
        </Heading>
        <Box mt={"5%"} border={"1px solid #2b6cb0"} w={"10%"}></Box>
      </Stack> */}
      <br />
      <br />
      <br />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} >
        {ProjectsDetails.map((item, i) => (
          <ProjectsCard className="project-card"
            IMAGE={item.IMAGE}
            NAME={item.NAME}
            TECHSTACK={item.TECHSTACK}
            DISCRIPTION={item.DISCRIPTION}
            GITHUB={item.GITHUB}
            DEPLOY={item.DEPLOY}
          />
        ))}
      </SimpleGrid>
    </Box>
    
      <br />
      <Drawer/>
  </>
  );
}