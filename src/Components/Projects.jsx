import React from "react";
import {
  Text,
  Box,
  Flex,
  Divider,
  CardBody,
  Image,
  Button,
  Heading,
  Stack,
  Card,
  Link,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";

import "../Styles/Project.css";
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
          {/* Card 1 here */}
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://user-images.githubusercontent.com/106021674/223912938-e37d0f04-b65e-480f-831e-66bcecd9fe43.png"
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
              <span
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
              </span>
              <br />
              <br />

              <Box style={{ gap: "10px" }}>
                <Box className="tech_used_span" style={{ gap: "10px" }}>
                  <span className="tech_used_span1">CSS</span>

                  <span className="tech_used_span2"> HTML</span>
                  <span className="tech_used_span2"> React</span>
                  <span className="tech_used_span3">Redux</span>
                  <span className="tech_used_span4">Chakra-Ui</span>
                  <span className="tech_used_span4">API</span>
                  <br />
                  <br />
                  <span className="tech_used_span5">JavaScript</span>

                  <span className="tech_used_span7">Cylic deployment</span>
                  <span className="tech_used_span8">Json-Server</span>
                </Box>
              </Box>
            </Box>

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
          </Card>
          {/* card 2 */}
          <br />
          <br />
          <br />

          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://private-user-images.githubusercontent.com/112654188/237685170-6748afe1-cbc3-4cca-9081-ee643a7b50de.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjgzODA4MDI0LCJuYmYiOjE2ODM4MDc3MjQsInBhdGgiOiIvMTEyNjU0MTg4LzIzNzY4NTE3MC02NzQ4YWZlMS1jYmMzLTRjY2EtOTA4MS1lZTY0M2E3YjUwZGUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDUxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA1MTFUMTIyMjA0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NjZiZmVmNTU1Y2M0MWU2ODIwZjJiOTFjMDI5N2RmZmYzNmRlNTdjZDAzYTJmYmNjOWUwMTdmMGNkNzMzOTEzNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.rj9OwgQZJqPdtwv56QfLTg8welbH2jqqRmKaRjfPQkc"
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
              <span
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
              </span>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <span className="tech_used_span1">CSS</span>

                <span className="tech_used_span2"> React</span>
                <span className="tech_used_span3">Redux</span>
                <span className="tech_used_span4">Chakra-Ui</span>
                <br />
                <br />
                <span className="tech_used_span5">JavaScript</span>

                <span className="tech_used_span7">Cylic deployment</span>
                <span className="tech_used_span8">Json-Server</span>
              </Box>
            </Box>

            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/dgdeepon/vestal-time-2973"
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
          </Card>
        </Flex>
        {/* FlexBox2 */}
        <br />
        <br />
        <br />
        <Flex justifyContent={"space-evenly"} className="flexBox2">
          {/* Card 1 here */}
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://private-user-images.githubusercontent.com/112654188/237686367-e7600435-961e-4741-a8dc-bca0fb62404d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjgzODA4MzAyLCJuYmYiOjE2ODM4MDgwMDIsInBhdGgiOiIvMTEyNjU0MTg4LzIzNzY4NjM2Ny1lNzYwMDQzNS05NjFlLTQ3NDEtYThkYy1iY2EwZmI2MjQwNGQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDUxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA1MTFUMTIyNjQyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZDY5OGIyNThhZDBlN2VkMmViNmY5NzAzNzM5MmVhYmYzOTBmYmIwNDNlMDg4NTI0MTZiOTc5ZWFhMjIzYjY2MSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.N9bQIsXRcYpmGrWAM3uMnVV7iz95LdHKl7pVrlhVRlc"
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
              <span
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
              </span>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
              

                <span className="tech_used_span3">HTML</span>

                <span className="tech_used_span1">CSS</span>
                <span className="tech_used_span2"> React</span>
                
                <span className="tech_used_span4">Chakra-Ui</span>
                <span className="tech_used_span5">JavaScript</span>
                <br />
                <br />
                <span className="tech_used_span7">Netlify</span>
                <span className="tech_used_span8">Json-Server</span>
              </Box>
            </Box>

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
          </Card>
          {/* card 2 */}
          <br />
          <br />
          <br />
          <Card maxW="lg" className="CardProjects">
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="https://private-user-images.githubusercontent.com/112654188/237686928-2999cba4-53fb-4205-b3fd-01e81329931e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjgzODA4NDI3LCJuYmYiOjE2ODM4MDgxMjcsInBhdGgiOiIvMTEyNjU0MTg4LzIzNzY4NjkyOC0yOTk5Y2JhNC01M2ZiLTQyMDUtYjNmZC0wMWU4MTMyOTkzMWUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDUxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA1MTFUMTIyODQ3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OWUyN2NiODk3NjA3YzI0NDUyNTA3ZDdhM2VjNWM0Y2U5ZjlkZTU2NGUyMThkOTgyNzAzNTE0MGU4Yjc4NDMyNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Lynydzni8NG_lnWu0dM_D8weaHGXrEANdiCQHRmCWgE"
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
                  Hindustan.com website
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
              <span
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
              </span>
              <br />
              <br />

              <Box className="tech_used_span" style={{ gap: "10px" }}>
                <span className="tech_used_span1">CSS</span>

                <span className="tech_used_span2"> HTML</span>

                <span className="tech_used_span4">API</span>
                <br />
                <br />
                <span className="tech_used_span5">JavaScript</span>

                <span className="tech_used_span7">Cylic deployment</span>
                <span className="tech_used_span8">Json-Server</span>
              </Box>
            </Box>

            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/iamgauhar/Fresh-Ahaar"
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
          </Card>
        </Flex>
      </Box>
    </div>
  );
};

export default Projects;
