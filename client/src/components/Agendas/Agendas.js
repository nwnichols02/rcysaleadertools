import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Modal from "../NewAgendaModal";
import axios from "axios";
import AllAgendas from "./AllAgendas";
import SideBar from "../SideBar";
import Header2 from "../Header2";

import {
    Container,
    Center,
    Stack,
    Flex,
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
  
export default function Agendas(){

    const [openModal, setOpenModal] = useState(false)
    const [agendas, getAgendas] = useState([]);

    const navigate = useNavigate();
    const homeRoute = () => {
        navigate('/Home')
    }

    const url = "http://localhost:9000";

    const getAllAgendas = () => {
        axios
          .get(`${url}/api/agendas`)
          .then((res) => {
              console.log(res.data)
            const allAgendas = res.data;
            getAgendas(allAgendas);
          })
          .catch((err) => console.err(`ERROR: ${err}`));
      };

    useEffect(() => {
        getAllAgendas()
    }, [])

    return(
        <div>
            {/* // <Container maxW={"100vw"}> */}
                <Header2/>
            {/* // <SideBar/> */}
            {/* <div>
            <button onClick={homeRoute}>Home</button>
            <h1>Agendas page</h1>
            <button className="openModal" onClick={() => {setOpenModal(true)}}>openModal</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
            <AllAgendas allAgendas={agendas}/> */}
      {/* <Sidebar/> */}
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              //red under baar
              // _after={{
              //   content: "''",
              //   width: "full",
              //   height: "30%",
              //   position: "absolute",
              //   bottom: 1,
              //   left: 0,
              //   bg: "red.400",
              //   zIndex: -1,
              // }}
            >
              Welcome
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              To Rose Creek YSA Tools
            </Text>
          </Heading>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"50vh"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
              <Text>
              <AllAgendas allAgendas={agendas}/>
              </Text>
          </Box>
        </Flex>
      </Stack>
      <Divider/>

    </div>
    )
}