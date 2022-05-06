import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Box,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate } from "react-router";

function SideBar({ children, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        // variant="alwaysOpen"
        // {...rest}
        // isOpen={isOpen}
        // placement="left"
        // onClose={onClose}
        // trapFocus={false}
        // closeOnOverlayClick={false}
        // blockScrollOnMount={false}
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            {/* <Input placeholder="Type here..." />  */}

            <Flex
              h="20"
              alignItems="center"
              mx="8"
              justifyContent="space-between"
              flexDirection="column"
            >
              <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Logo
              </Text>
              <Flex
                align="left"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Button onClick={homeRoute}>Home</Button>
              </Flex>
              <Flex
                align="left"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Button onClick={agendasRoute}>Agendas</Button>
              </Flex>
              <Flex
                align="left"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Button onClick={callingsRoute}>Callings</Button>
              </Flex>
              <Flex
                align="left"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Button onClick={prayersRoute}>Prayers</Button>
              </Flex>
              <Flex
                align="left"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Button onClick={talksRoute}>Talks</Button>
              </Flex>
              <Flex
                align="left"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Button onClick={settingsRoute}>Settings</Button>
              </Flex>
            </Flex>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideBar;
