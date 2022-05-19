import React, { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "./SideBar";
import Header from "./Header";
import Header2 from "./Header2";
import "./Home.css";

import {
  Container,
  Center,
  Stack,
  Flex,
  Grid,
  GridItem,
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

import {
  CloseButton,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  useBreakpointValue,
} from "@chakra-ui/react";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/Home");
  };
  const callingsRoute = () => {
    navigate("/Callings");
  };
  const agendasRoute = () => {
    navigate("/Agendas");
  };
  const recentlySpakeRoute = () => {
    navigate("/Talks");
  };
  const prayerRoute = () => {
    navigate("/Prayers");
  };
  const settingsRoute = () => {
    navigate("/Settings");
  };

  const LinkItems = [
    { name: "Home" },
    { name: "Agendas" },
    { name: "Callings" },
    { name: "Prayers" },
    { name: "Talks" },
    { name: "Settings" },
  ];
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="bg-gray-800">
      <Header2 />
      {/* <Header /> */}
      {/* <Sidebar/> */}
      <div>
        <Container maxW="90vw" paddingTop="18px" bg="#f5f5f5">
          <Box borderRadius="lg" p="160" border="1px">
            <h1 className="title">
              {/* Welcome to Rose Creek YSA  */}
              <Center>Welcome to Rose Creek YSA Leader Tools</Center>
            </h1>
          </Box>
        </Container>
        <Container maxW="90vw" paddingTop="18px" bg="#f5f5f5">
          <Flex flexDirection="row" justifyContent="space-between">
            <Box borderRadius="lg" p="10" w='43vw' border="1px">
              <h1 className="title"></h1>
            </Box>
            <Box borderRadius="lg" p="10" w='43vw' border="1px">
              <h1 className="title"></h1>
            </Box>
          </Flex>
        </Container>
        <Container maxW="90vw" paddingTop="18px" bg="#f5f5f5">
          <Flex flexDirection="row" justifyContent="space-between">
            <Box borderRadius="lg" p="80" w='90vw' border="1px">
              <h1 className="title"></h1>
            </Box>
          </Flex>
        </Container>
        
      </div>
      {/* <div>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          borderRadius="full"
          // sizes='sm'
          boxSize="100px"
          src={
            "https://images.unsplash.com/photo-1568963116276-951d46efd437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </div> */}
      {/* <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} w='1000px' h='370px' colSpan={1} bg="tomato" ><Text fontSize='6xl' className="title">
          Welcome to <br />
          RCYSA Leader Tools
        </Text></GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid> */}
    </div>
    // <Container>
    // <Box>
    //   <Sidebar/>
    //     <Box h='50vh' display='flex' flexWrap='wrap' alignItems='center' maxW='lg' borderWidth='1px' borderRadius='10px' >

    //       <Text>
    //         Hello World Welcome
    //         TO
    //         Our next
    //       </Text>
    //   {/* <Center  h='50vh' w='100%'> */}

    //   {/* </Center> */}
    //     </Box>

    // </Box>

    // </Container>
    // <Container maxW={"100vw"}>
    //   <Stack
    //     align={"center"}
    //     spacing={{ base: 8, md: 10 }}
    //     py={{ base: 20, md: 28 }}
    //     direction={{ base: "column", md: "row" }}
    //   >
    //     <Stack flex={1} spacing={{ base: 5, md: 10 }}>
    //       <Heading
    //         lineHeight={1.1}
    //         fontWeight={600}
    //         fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
    //       >
    //         <Text
    //           as={"span"}
    //           position={"relative"}
    //           //red under baar
    //           // _after={{
    //           //   content: "''",
    //           //   width: "full",
    //           //   height: "30%",
    //           //   position: "absolute",
    //           //   bottom: 1,
    //           //   left: 0,
    //           //   bg: "red.400",
    //           //   zIndex: -1,
    //           // }}
    //         >
    //           Welcome
    //         </Text>
    //         <br />
    //         <Text as={"span"} color={"red.400"}>
    //           To Rose Creek YSA Tools
    //         </Text>
    //       </Heading>
    //       {/* <Text color={"gray.500"}>
    //         Snippy is a rich coding snippets app that lets you create your own
    //         code snippets, categorize them, and even sync them in the cloud so
    //         you can use them anywhere. All that is free!
    //       </Text> */}
    //       {/* <Stack
    //         spacing={{ base: 4, sm: 6 }}
    //         direction={{ base: "column", sm: "row" }}
    //       > */}
    //         {/* <Button
    //           rounded={"full"}
    //           size={"lg"}
    //           fontWeight={"normal"}
    //           px={6}
    //           colorScheme={"red"}
    //           bg={"red.400"}
    //           _hover={{ bg: "red.500" }}
    //         >
    //           Get started
    //         </Button>
    //         <Button
    //           rounded={"full"}
    //           size={"lg"}
    //           fontWeight={"normal"}
    //           px={6}
    //           // leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
    //         >
    //           How It Works
    //         </Button> */}
    //       {/* </Stack> */}
    //     </Stack>
    //     <Flex
    //       flex={1}
    //       justify={"center"}
    //       align={"center"}
    //       position={"relative"}
    //       w={"full"}
    //     >
    //       {/* <Blob
    //         w={"150%"}
    //         h={"150%"}
    //         position={"absolute"}
    //         top={"-20%"}
    //         left={0}
    //         zIndex={-1}
    //         color={useColorModeValue("red.50", "red.400")}
    //       /> */}
    //       <Box
    //         position={"relative"}
    //         height={"50vh"}
    //         rounded={"2xl"}
    //         boxShadow={"2xl"}
    //         width={"full"}
    //         overflow={"hidden"}
    //       >
    //         {/* <IconButton
    //           aria-label={"Play Button"}
    //           variant={"ghost"}
    //           _hover={{ bg: "transparent" }}
    //           // icon={<PlayIcon w={12} h={12} />}
    //           size={"lg"}
    //           color={"white"}
    //           position={"absolute"}
    //           left={"50%"}
    //           top={"50%"}
    //           transform={"translateX(-50%) translateY(-50%)"}
    //         /> */}
    //         <Image
    //           alt={"Hero Image"}
    //           fit={"cover"}
    //           align={"center"}
    //           flex='center'
    //           w={"100%"}
    //           h={"100%"}
    //           src={
    //             "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
    //           }
    //         />
    //       </Box>
    //     </Flex>
    //   </Stack>
    //   <Divider/>

    // </Container>
  );
}
