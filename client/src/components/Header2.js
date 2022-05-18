import "./Header.css";
import { useNavigate } from "react-router";
import {
  Container,
  Center,
  Stack,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Box,
  Heading,
  Text,
  Button,
  Divider,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./Header";

function Header2() {
  // const isHomepage = () => {
  //   URLSearchParams === ('/Home')
  // }
  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/Home");
  };
  const logoutRoute = () => {
    navigate("/");
  };
  const callingsRoute = () => {
    navigate("/Callings");
  };
  const agendasRoute = () => {
    navigate("/Agendas");
  };
  const talksRoute = () => {
    navigate("/Talks");
  };
  const prayersRoute = () => {
    navigate("/Prayers");
  };
  const settingsRoute = () => {
    navigate("/Settings");
  };
  return (
    // <div className="stupid">
    <div className="header2">
      <div className="dumb">

      <Image
        className="header_nav"
        alt={"Login Image"}
        objectFit={"cover"}
        borderRadius="full"
        padding={"10px"}
        // sizes='sm'
        boxSize="100px"
        // zIndex={100}
        zIndex="auto"
        src={
          "https://images.unsplash.com/photo-1568963116276-951d46efd437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        }
      />
      <div className="header_nav">
        <div className="header_option">
        <span className="header_optionLineOne">Hello, Guest</span>
          <span className="header_optionLineTwo">
            <button onClick={logoutRoute}>Logout</button>
          </span>
        </div>
      </div>
        </div>
      {/* </Flex> */}
      {/* <div> */}
      {/* {isHomepage(false) ? ( */}
      {/* <div className="header_nav">
            <div className="header_option">
              <span className="header_optionLineOne">Hello, Guest</span>
              <span className="header_optionLineTwo">
                <button>Logout</button>
              </span>
            </div>
          </div> */}
      {/* ) : <h1>hi</h1>} */}
      {/* </div> */}
      {/* {if(!<Header/>){(

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello, Guest</span>
          <span className="header_optionLineTwo">
            <button>Logout</button>
          </span>
        </div>
      </div>
      )}} */}
      {/* <Spacer/> */}
      <Flex justifyContent="space-evenly" margin="48px">
        <Grid templateColumns="repeat(6, 1fr)" gap={10}>
          <GridItem w="100%">
            <Button onClick={homeRoute}>Home</Button>
          </GridItem>
          <GridItem w="100%">
            <Button onClick={agendasRoute}>Agendas</Button>
          </GridItem>
          <GridItem w="100%">
            <Button onClick={callingsRoute}>Callings</Button>
          </GridItem>
          <GridItem w="100%">
            <Button onClick={prayersRoute}>Prayers</Button>
          </GridItem>
          <GridItem w="100%">
            <Button onClick={talksRoute}>Talks</Button>
          </GridItem>
          <GridItem w="100%">
            <Button onClick={settingsRoute}>Settings</Button>
          </GridItem>
        </Grid>
      </Flex>
    </div>
    // </div>
  );
}

export default Header2;

/* <Flex
        margin="30px 0px"
        align="center"
        p="4"
        mx="4"
        borderRadius="xl"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "pink.400",
          color: "gray.600",
        }}
      >
        <Button onClick={homeRoute}>Home</Button>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "pink.400",
          color: "gray.600",
        }}
      >
        <Button onClick={agendasRoute}>Agendas</Button>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "pink.400",
          color: "gray.600",
        }}
      >
        <Button onClick={callingsRoute}>Callings</Button>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "pink.400",
          color: "gray.600",
        }}
      >
        <Button onClick={prayersRoute}>Prayers</Button>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "pink.400",
          color: "gray.600",
        }}
      >
        <Button onClick={talksRoute}>Talks</Button>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "pink.400",
          color: "gray.600",
        }}
      >
        <Button onClick={settingsRoute}>Settings</Button>
      </Flex> */
/* <Flex
        align='flex-end'
      > */
