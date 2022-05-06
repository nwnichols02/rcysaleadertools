import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Login() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  const navigate = useNavigate();
  const loginRoute = () => {
    navigate("/Home");
  };
  const signUpRoute = () => {
    navigate("/SignUp");
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#f45377",
                zIndex: -1,
              }}
            >
              Rose Creek YSA
            </Text>
            <br />{" "}
            <Text color={"#f45377"} as={"span"}>
              Leader Tools
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            An intelligent program that assists the building of Zion.
          </Text>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Box
            border={'2px'}
            borderRadius='full' px='2' ml='2' width={'50%'}
            >
            <input id="username" type="text" value={input}
        onChange={handleInputChange}/>
            </Box>
            {!isError ? (
              <FormHelperText>
                Enter your Username to login.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Username is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Box
            border={'2px'}
            borderRadius='full' px='2' ml='2' width={'50%'}
            >
            <input id="username" type="text" value={input}
        onChange={handleInputChange}/>
            </Box>
            {!isError ? (
              <FormHelperText>
                Enter your Password to login.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormControl>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              size={"lg"}
              rounded={"full"}
              bg={"#f45377"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
              onClick={loginRoute}
            >
              Login
            </Button>
            <Button rounded={"full"} size={"lg"} onClick={signUpRoute}>
              SignUp
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} boxSize={"100vh"}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1568963116276-951d46efd437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
    // <div>
    //     <header>
    //         <img/>
    //         <button onClick={signUpRoute}>Sign Up</button>
    //     </header>
    //     <div className="left div">

    //     </div>
    //     <div className="right div">
    //     <h1>Sign in To RCYSA Leader Tools</h1>
    //     <h2>Enter Your Login Credentials to Access Your Account</h2>
    //     <div className="form">
    //         <form>
    //             <div className="input-container">
    //                 <label>Username</label>
    //                 <input type='text' name='name'/>
    //             </div>
    //             <div className="input-container">
    //                 <label>Password</label>
    //                 <input type='password' name='pass'/>
    //             </div>
    //             <div className="button-container">
    //                 <input type='submit' onClick={loginRoute} /*onSubmit={handleSubmit}*//>
    //             </div>
    //         </form>
    //     </div>
    //     </div>
    // </div>
  );
}
