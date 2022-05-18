import React from 'react';
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

const AllAgendas = (props) => {
  return (
    <Box>
{props.allAgendas.map(agenda => {
          return(
            <Box key={agenda.agenda_id} className="agenda-wrapper">
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>Date: {agenda.date}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>Opening Prayer: {agenda.opening_prayer}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>Closing Prayer: {agenda.closing_prayer}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.opening_hymn}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.conducting}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.presiding}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.releases}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.callings}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.new_members}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.sacrament_hymn}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.speaker_1}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.speaker_2}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.intermediate_hymn}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.closing_hymn}</Text>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>{agenda.announcements}</Text>
            </Box>
          )
        })}
    </Box>

  )
}

export default AllAgendas;