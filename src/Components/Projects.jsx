import React from "react";
import {Text,Box,Flex,Divider,CardBody,Image,Button,Heading,Stack,Card,Link} from "@chakra-ui/react";
import "../Styles/Project.css";
import Drawer from "./Drawer";


const Projects = () => {
  return (
    <div id="projects" className="project-github-link"  >
      <Text className="Project_Text">Projects</Text>
      <br />
      <Divider width={"80%"} margin="auto" />
      <br />
      <br />
      <Box style={{ width: "90%", margin: "auto" }} className="boxFlexupper">
        <Flex className="flexBox1">
          
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="one-store.png"
                alt="Meeshow.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  Meeshow.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  Meesho is India's largest and most trusted marketplace for
                  Resellers, who sell products online through WhatsApp and
                  Facebook
                </Text>
                <Text color="blue.600" fontSize="2xl"></Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <div
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Collaborative
              </div>
              <br />
              <br />

              <Box className="tech_used_span_container">
                <Box className="tech_used_span" style={{ gap: "10px" }}>
                  <p className="tech_used_span1">CSS</p>
                  <p className="tech_used_span2"> HTML</p>
                  <p className="tech_used_span2"> React</p>
                  <p className="tech_used_span3">Redux</p>
                  <p className="tech_used_span4">Chakra-Ui</p>
                  <p className="tech_used_span4">API</p>
                  <p className="tech_used_span5">JavaScript</p>
                  <p className="tech_used_span7">Cylic deployment</p>
                  <p className="tech_used_span8">Json-Server</p>
                </Box>
              </Box>
            </Box>

            <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Pannakbhushana/Meesho-Clone"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  {" "}
                  Github{" "}
                </Button>
              </Link>
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://storied-blini-63970f.netlify.app/"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  deloyment
                </Button>
              </Link>{" "}
            </Flex>
            </div>

          </Card>
          {/* card 2 */}
          <br />
          <br />
          <br />
{/* ---------------------------------------------daily-object---------------------------------------------- */}
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="reg-stuff.png"
                alt="Meeshow.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  DailyObjects.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                   DailyObjects is a design obsessed lifestyle accessories brand, 
                   committed to make your every day carry #lessordinary
                </Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <div
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Collaborative
              </div>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <p className="tech_used_span1">CSS</p>
                <p className="tech_used_span2"> React</p>
                <p className="tech_used_span3">Redux</p>
                <p className="tech_used_span4">Chakra-Ui</p>
                <p className="tech_used_span5">JavaScript</p>
                <p className="tech_used_span7">Cylic deployment</p>
                <p className="tech_used_span8">Json-Server</p>
              </Box>
            </Box>
          <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Pannakbhushana/reg-stuff"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  Github
                </Button>
              </Link>{" "}
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://regstuff.vercel.app/"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  deloyment
                </Button>
              </Link>{" "}
            </Flex>
            </div>
          </Card>
        </Flex>
        {/* FlexBox2 */}
        <br />
        <br />
        <br />
        <Flex justifyContent={"space-evenly"} className="flexBox2">
         
{/* --------------------------------------------------------------------Amezon--------------------------------------------          */}
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="amezon-img.png"
                alt="TrackingTime.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  amazon.in website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  cloned Amazon website which is an American multinational technology 
                  company focusing on e-commerce, cloud computing, online advertising, 
                  digital streaming and artificial intelligence.
                </Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <div
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Individual
              </div>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <p className="tech_used_span3">HTML</p>
                <p className="tech_used_span1">CSS</p>
                <p className="tech_used_span2"> React</p>
                <p className="tech_used_span4">Chakra-Ui</p>
                <p className="tech_used_span5">JavaScript</p>
                <p className="tech_used_span7">Netlify</p>
                <p className="tech_used_span8">Json-Server</p>
              </Box>
            </Box>

          <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Pannakbhushana/amezon-clone"
                target="_blank"
              >
                <Button colorScheme="blue" solid>
                  Github{" "}
                </Button>
              </Link>
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                target="_blank"
                href="https://taupe-salamander-d7555e.netlify.app/"
              >
                <Button colorScheme="blue" solid>
                  {" "}
                  deloyment
                </Button>
              </Link>
            </Flex>
          </div>

          </Card>
          {/* card 2 */}
          <br />
          <br />
          <br />

{/* -------------------------------------------------------------------Fresh-Ahar /Kinf-meal----------------------------------------- */}
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="fresh-aahar.png"
                alt="Meeshow.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: "Lobster Two, cursive" }}
                  size="md"
                >
                  Kind Meals website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  Cloned Kind Meals website which is famous for best deal coupons on all cuisine across the globe.
                </Text>
              </Stack>
            </CardBody>

            <Box className="tech_used">
              <div
                className="project-tech-stack"
                style={{
                  backgroundColor: "rgb(229,62,62)",
                  color: "#fff",
                  fontFamily: "Lobster Two, cursive",
                  fontWeight: "900",
                  padding: "5px 10px",
                  borderRadius: "10px 18px",
                  marginRight: "220px",
                }}
              >
                Collaborative
              </div>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <p className="tech_used_span1">CSS</p>
                <p className="tech_used_span2"> HTML</p>
                <p className="tech_used_span4">API</p>
                <p className="tech_used_span5">JavaScript</p>
                <p className="tech_used_span7">Cylic deployment</p>
                <p className="tech_used_span8">Json-Server</p>
              </Box>
            </Box>
          <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Pannakbhushana/Fresh-Ahaar"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  Github
                </Button>
              </Link>{" "}
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://fascinating-smakager-637686.netlify.app/"
                target="_blank"
              >
                <Button colorScheme="blue" solid>
                  deloyment
                </Button>
              </Link>{" "}
            </Flex>
          </div>
          </Card>
        </Flex>
       
      </Box>
      <br />
      <br />
      <br />
      <Drawer/>
    </div>
  );
};

export default Projects;
