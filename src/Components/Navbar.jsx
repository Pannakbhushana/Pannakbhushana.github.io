import {Box,Flex,HStack} from "@chakra-ui/react";
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import style from "../Styles/Navbar.module.css";
import resume from "../resume/Rahul-Kumar-Mishra-Resume.pdf";

export default function Navbar() {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1LD24IjCjdielVrY4O3BngFvYkj51hIOq/view?usp=sharing"
    );
  };
  return (
    <>
      <Box className={style.container}
        id="nav-menu"
        position="sticky"
        top={"0px"}
        margin={"auto"}
        width={"100%"}
      >

          <div className={style.logoText}  >
            <h1 >RAHUL <span className={style.logoSpan} >MISHRA</span></h1>
          </div>
         

        <Flex
          h={16}
          alignItems={"right"}
          justifyContent={"right"}
          position="relative"
        >

          
          <HStack spacing={23} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={9}
              display={{ base: "none", md: "flex" }}
              color="#fff"
              fontSize="19px"
            >

          
              <a
                className="nav-link home"
                href="#home"
                style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}
              >
                Home
              </a>

              <a className="nav-link about" href="#about" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
                About
              </a>
              <a className="nav-link skills" href="#skills" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
                Skills
              </a>

              <a className="nav-link projects" href="#projects" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
                Projects
              </a>
         
              <a   href="#contact" style={{
                  fontSize: "23px",
                  fontFamily: "Lobster Two cursive",
                  fontWeight: "800",
                  color: "#DCD7A0 ",
                }}>
               Contact
              </a>
             
              <button
                id="resume-button-1"
                onClick={handleResume}
                style={{ borderRadius: "12px 20px" }}
              >
                <a
                  id="resume-link-1"
                  href={resume}
                  download="Rahul-Kumar-Mishra-Resume"
                  className={`${style.resumes} nav-link resume`}
                  rel="noreferrer"
                  style={{
                    fontSize: "23px",
                    fontFamily: "Lobster Two cursive",
                    fontWeight: "800",
                
                  }}
                >
                  Resume
                </a>
              </button>
              <div></div>
            </HStack>
          </HStack>
        </Flex>

      <Menu>
             {({ isOpen }) => (
            <>
          <MenuButton isActive={isOpen}  
              variant={"ghost"}
              color="#fff"
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              position={"relative"}
              left="-10px"
              zIndex={444444} >

            {isOpen ? <h1 style={{fontSize:"30px"}}><CloseIcon/></h1> : <h1 style={{fontSize:"40px"}}><HamburgerIcon /></h1>}
          </MenuButton>

          <MenuList>
              <MenuItem><a href="#home">Home</a></MenuItem>
              <MenuItem><a href="#about">About</a></MenuItem>
              <MenuItem><a href="#skills">Skills</a></MenuItem>
              <MenuItem><a href="#projects">Projects</a></MenuItem>
              <MenuItem><a href="#contact">Contact</a></MenuItem>
              <MenuItem onClick={handleResume}><a href={resume} download="Rahul-Kumar-Mishra-Resume">Resume</a></MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  </Box>

    </>
  );
}
