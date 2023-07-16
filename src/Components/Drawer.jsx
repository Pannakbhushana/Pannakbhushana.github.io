import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react'
import {Text,Box,Flex,CardBody,Image,Heading,Divider,Stack,Card,Link} from "@chakra-ui/react";
import "../Styles/Drawer.css";

export default function Drawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['See More']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          >{size}</Button>
        ))}
  
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody style={{maxHeight:"80vh",overflowY: 'scroll',background:'#fff'}}>

    <Box style={{ width: "90%", margin: "auto" }} className="boxFlexupper">

        <Flex className="flexBox1">
    {/* -----------------------------------------------card-1-Youtube----------------------------------------------   */}
          <Card maxW="lg" className="CardProjects" 
            boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'>
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="youtubeImg.png"
                alt="Youtube.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  Youtube.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  YouTube is an American online video sharing and social media platform headquartered in San Bruno, 
                  California, United States. Accessible worldwide
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
                Individual
              </span>
              <br />
              <br />

              <Box style={{ gap: "10px" }}>
                <Box className="tech_used_span" style={{ gap: "10px" }}>
                <span className="tech_used_span2"> HTML</span>
                  <span className="tech_used_span1">CSS</span>
                  <span className="tech_used_span3">JavaScript</span>
                  <span className="tech_used_span4">API</span>
                </Box>
              </Box>
            </Box>

            <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Pannakbhushana/youtube"
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
                href="https://frolicking-caramel-76c661.netlify.app/"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  deloyment
                </Button>
              </Link>{" "}
            </Flex>
            </div>

          </Card>
         
          <br />
          <br />
          <br />

 {/* -----------------------------------------------card-2-coforge----------------------------------------------   */}
          <Card maxW="lg" className="CardProjects"
          boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'>
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="coforgeImg.png"
                alt="coforge.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  Coforge.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  Coforge, formerly known as NIIT Technologies, is an Indian multinational information technology 
                  company based in Noida, India and New Jersey, United States.
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

              <Box className="tech_used_span" style={{ gap: "10px" }} >
                <span className="tech_used_span2"> React</span>
                <span className="tech_used_span1">CSS</span>
                <span className="tech_used_span4">Chakra-Ui</span>
                <span className="tech_used_span5">JavaScript</span>
                <span className="tech_used_span7">Netlify deployment</span>
              </Box>
            </Box>
          <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Pannakbhushana/coforge-clone-repo"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  Github
                </Button>
              </Link>{" "}
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://marvelous-mandazi-522961.netlify.app/"
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
     




        <br />
        <br />
        <br />
        <Flex justifyContent={"space-evenly"} className="flexBox2">
         
    {/* ------------------------------------------------------card-3-Car-game----------------------------------------------   */}
          <Card maxW="lg" className="CardProjects"
          boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'>
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="cargameImg.png"
                alt="cargameImg.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: " Lobster Two, cursive" }}
                  size="md"
                >
                  Car Game App
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                  Experience high-octane racing action in my thrilling car game. 
                  Master challenging tracks, outmaneuver rivals, and dominate the leaderboard. 
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
                <span className="tech_used_span5">JavaScript</span>
                <span className="tech_used_span7">Netlify</span>
              </Box>
            </Box>

          <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/masai-course/rahul_kumar_mishra_fw21_0895/tree/master/unit-1"
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
                href="https://prismatic-bonbon-9e4494.netlify.app/"
              >
                <Button colorScheme="blue" solid>
                  {" "}
                  deloyment
                </Button>
              </Link>
            </Flex>
          </div>

          </Card>
      
          <br />
          <br />
          <br />


 {/* -----------------------------------------------card-4-Life Bindass----------------------------------------------   */}
          <Card maxW="lg" className="CardProjects"
          boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'>
            <CardBody className="project-card">
              <Image
                className="cardImage"
                src="lifebindassImg.png"
                alt="lifebindassImg.com"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading
                  className="project-title"
                  fontWeight={"700"}
                  style={{ fontFamily: "Lobster Two, cursive" }}
                  size="md"
                >
                  LifeStyle.com website
                </Heading>
                <Text
                  className="project-description"
                  style={{ fontFamily: " Lobster Two, cursive" }}
                >
                 Lifestyle is a retail fashion brand which comes under Dubai-based retail and hospitality conglomerate,
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
                <span className="tech_used_span1">React</span>

                <span className="tech_used_span2"> Css</span>

               
                <span className="tech_used_span5">JavaScript</span>

                <span className="tech_used_span7">Netlify</span>
                
              </Box>
            </Box>
          <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
            <Flex spacing="2">
              <Link
                className="project-github-link"
                href="https://github.com/Pannakbhushana/life-bindass"
                target={"_blank"}
              >
                <Button colorScheme="blue" solid>
                  Github
                </Button>
              </Link>{" "}
              <Link
                style={{ marginLeft: "10px" }}
                className="project-deployed-link"
                href="https://deluxe-travesseiro-0bca43.netlify.app/"
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
        <br />
        <br />
        <br />
        <Flex justifyContent={"space-evenly"} className="flexBox2">
         
         {/* ------------------------------------------------------card-5-Dot-&-Key----------------------------------------------   */}
               <Card maxW="lg" className="CardProjects"
               boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'>
                 <CardBody className="project-card">
                   <Image
                     className="cardImage"
                     src="dotandkeyImg.png"
                     alt="dotandkeyImg.com"
                     borderRadius="lg"
                   />
                   <Stack mt="6" spacing="3">
                     <Heading
                       className="project-title"
                       fontWeight={"700"}
                       style={{ fontFamily: " Lobster Two, cursive" }}
                       size="md"
                     >
                       Dot & key website
                     </Heading>
                     <Text
                       className="project-description"
                       style={{ fontFamily: " Lobster Two, cursive" }}
                     >
                      Dot & Key is a fresh take on skincare. One that's founded on the understanding that everyone is unique. 
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
                     <span className="tech_used_span5">JavaScript</span>
                     <span className="tech_used_span7">Netlify</span>
                   </Box>
                 </Box>
     
               <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
                 <Flex spacing="2">
                   <Link
                     className="project-github-link"
                     href="https://github.com/Pannakbhushana/dot-and-key"
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
                     href="https://glowing-chebakia-9bbca9.netlify.app/"
                   >
                     <Button colorScheme="blue" solid>
                       {" "}
                       deloyment
                     </Button>
                   </Link>
                 </Flex>
               </div>
     
               </Card>
           
               <br />
               <br />
               <br />
     
     
      {/* -----------------------------------------------card-6-wellness360-Wefit----------------------------------------------   */}
               <Card maxW="lg" className="CardProjects"
               boxShadow='rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'>
                 <CardBody className="project-card">
                   <Image
                     className="cardImage"
                     src="wefitImg.png"
                     alt="wefitImg.com"
                     borderRadius="lg"
                   />
                   <Stack mt="6" spacing="3">
                     <Heading
                       className="project-title"
                       fontWeight={"700"}
                       style={{ fontFamily: "Lobster Two, cursive" }}
                       size="md"
                     >
                       WEFIT website
                     </Heading>
                     <Text
                       className="project-description"
                       style={{ fontFamily: " Lobster Two, cursive" }}
                     >
                      "Introducing WEFIT, a cutting-edge fitness app designed to help users achieve their 
                      health and wellness goals. With an intuitive interface and personalized features, 
                      WEFIT offers tailored workout plans, nutrition tracking, and real-time progress monitoring
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
                     <span className="tech_used_span1">React</span>
     
                     <span className="tech_used_span2"> Css</span>
     
                    
                     <span className="tech_used_span5">JavaScript</span>
     
                     <span className="tech_used_span7">Netlify</span>
                     
                   </Box>
                 </Box>
               <div style={{margin:"auto",marginTop:"5%",marginBottom:"5%"}}>
                 <Flex spacing="2">
                   <Link
                     className="project-github-link"
                     href="https://github.com/Pannakbhushana/we-fit"
                     target={"_blank"}
                   >
                     <Button colorScheme="blue" solid>
                       Github
                     </Button>
                   </Link>{" "}
                   <Link
                     style={{ marginLeft: "10px" }}
                     className="project-deployed-link"
                     href="https://brilliant-chebakia-131166.netlify.app/"
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

            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

