import React, { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import LogoutModal from "./LogoutModal";
// import SidebarContent from "./Home-SideBar";
import Sidebar from "./SideBar";
// import Header from "./Header";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useBreakpointValue
} from "@chakra-ui/react";

//   import {
//     FiHome,
//     FiTrendingUp,
//     FiCompass,
//     FiStar,
//     FiSettings,
//     FiMenu,
//   } from 'react-icons/fi';

//   import { IconType } from 'react-icons';

//   interface LinkItemProps {
//     name: string;
//     icon: IconType;
//   }

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }


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
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)


  return (
    <>
    <Sidebar
        // variant={variants?.navigation}
        // isOpen={isSidebarOpen}
        // onClose={toggleSidebar}
      />
      {/* <Box ml={!variants?.navigationButton && 200}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box> */}
    </>


    // <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
    //   <Drawer
    //     autoFocus={false}
    //     isOpen={isOpen}
    //     placement="left"
    //     onClose={onClose}
    //     returnFocusOnClose={false}
    //     onOverlayClick={onClose}
    //     size="full"
    //   >
    //     <DrawerContent>
    //       <SidebarContent onClose={onClose} />
    //       <Box>
    //           <button>Home</button>
    //       </Box>
    //     </DrawerContent>
    //   </Drawer>
    // </Box>

    //
    //   <Box
    //     bg={useColorModeValue('white', 'gray.900')}
    //     borderRight="1px"
    //     borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    //     w={{ base: 'full', md: 60 }}
    //     pos="fixed"
    //     h="full"
    //     {...rest}>
    //     <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
    //       <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
    //         Logo
    //       </Text>
    //       <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    //     </Flex>

    //     <NavItem key={'Home'} onClick={homeRoute}>
    //         <Link to={'/Home'}>
    //         Home
    //         </Link>
    //     <Flex
    //       align="center"
    //       p="4"
    //       mx="4"
    //       borderRadius="lg"
    //       role="group"
    //       cursor="pointer"
    //       _hover={{
    //         bg: 'cyan.400',
    //         color: 'white',
    //       }}
    //     //   {...rest}
    //       />
    //     </NavItem>
    //     <NavItem key={'Agendas'} onClick={agendasRoute}>
    //         Agendas
    //     </NavItem>
    //     <NavItem key={'Callings'} onClick={callingsRoute}>
    //         Callings
    //     </NavItem>
    //     <NavItem key={'Prayers'} onClick={prayersRoute}>
    //         Prayers
    //     </NavItem>
    //     <NavItem key={'Talks'} onClick={talksRoute}>
    //         Talks
    //     </NavItem>
    //     <NavItem key={'Settings'} onClick={settingsRoute}>
    //         Settings
    //     </NavItem>

    //   </Box>
    //   <Drawer
    //     autoFocus={false}
    //     isOpen={isOpen}
    //     placement="left"
    //     onClose={onClose}
    //     returnFocusOnClose={false}
    //     onOverlayClick={onClose}
    //     size="full">
    //     <DrawerContent>
    //       <SidebarContent onClose={onClose} />
    //     </DrawerContent>
    //   </Drawer>
    //   {/* mobilenav  */}
    //   {/* <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} /> */} */}
    //   <Box ml={{ base: 0, md: 60 }} p="4">
    //     {/* {children} */}
    //   </Box>
    // </Box>

    // <div>
    //     <nav>
    //         <img/>
    //         <h4>Welcome user.name to RCYSA Leader Tools</h4>
    //         <a href={prayerRoute} onClick={prayerRoute}>Prayerzzz</a>
    //         <button onClick={() => setOpenModal(true)}>Logout</button>
    //         {openModal && <LogoutModal closeModal={setOpenModal}/>}
    //     </nav>
    //     <div className="top-navbar">
    //         <button onClick={prayerRoute}>Prayers List</button>
    //         <button onClick={recentlySpakeRoute}>Recently Spoke</button>
    //         {/* <button>New Members</button> */}
    //     </div>
    //     <div className="grid-navbar">
    //         <button onClick={agendasRoute}>Agendas</button>
    //         <button onClick={callingsRoute}>Callings</button>
    //         {/* <button>Interviews</button> */}
    //         {/* <button>Ordinations</button> */}
    //         <button onClick={settingsRoute}>Settings</button>
    //     </div>
    // </div>
  );
}

// interface SidebarProps extends BoxProps {
//     onClose: () => void;
//   }
// const LinkItems = [
//     {name: 'Home' },
//     {name: 'Agendas'},
//     {name: 'Callings'},
//     {name: 'Prayers'},
//     {name: 'Talks'},
//     {name: 'Settings'},
// ];
//   const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//     const navigate = useNavigate();

//     const homeRoute = () => {
//         navigate('/Home')
//     }
//     const callingsRoute = () => {
//         navigate('/Callings')
//     }
//     const agendasRoute = () => {
//         navigate('/Agendas')
//     }
//     const talksRoute = () => {
//         navigate('/Talks')
//     }
//     const prayersRoute = () => {
//         navigate('/Prayers')
//     }
//     const settingsRoute = () => {
//         navigate('/Settings')
//     }
//     return (

//     );
//   };

//   interface NavItemProps extends FlexProps {
//     icon: IconType;
//     children: ReactText;
//   }
//   const NavItem = ({children}) => {
//     return (
//     //   <Link to={"#"} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} >

//     //       {/* {icon && (
//     //         <Icon
//     //           mr="4"
//     //           fontSize="16"
//     //           _groupHover={{
//     //             color: 'white',
//     //           }}
//     //           as={icon}
//     //         />
//     //       )} */}
//     //       {children}
//     //     </Flex>
//     //   </Link>
//     );
//   };

//   interface MobileProps extends FlexProps {
//     onOpen: () => void;
//   }
//   const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//     return (
//       <Flex
//         ml={{ base: 0, md: 60 }}
//         px={{ base: 4, md: 24 }}
//         height="20"
//         alignItems="center"
//         bg={useColorModeValue('white', 'gray.900')}
//         borderBottomWidth="1px"
//         borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//         justifyContent="flex-start"
//         {...rest}>
//         <IconButton
//           variant="outline"
//           onClick={onOpen}
//           aria-label="open menu"
//         //   icon={<FiMenu />}
//         />

//         <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//       </Flex>
//     );
//   };
