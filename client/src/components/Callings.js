import React from "react";
import { useNavigate } from "react-router";
import Header2 from "./Header2";
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

export default function Callings() {
  const navigate = useNavigate();
  const homeRoute = () => {
      navigate('/Home')
  }
  const newCallingRoute = () => {
      navigate('/Callings/new')
  }
  const editCallingRoute = () => {
      navigate('/Callings/edit/:id')
  }
  return (
    <div>
      <Header2/>
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
        <button onClick={homeRoute}>Home</button>
      <h1>Callings page</h1>
      <header>
        <button onClick={newCallingRoute}>New Calling</button>
        <button onClick={editCallingRoute}>Edit Calling</button>
      </header>
    </div>
  );
}
