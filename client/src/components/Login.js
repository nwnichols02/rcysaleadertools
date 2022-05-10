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

import {
  Input,
  InputGroup,
  HStack,
  Checkbox,
  InputRightElement,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Login() {
  const [input, setInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <Flex
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
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
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input type={showPassword ? "text" : "password"} />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                          >
                          {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                      >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"} onClick={signUpRoute}>Forgot password?</Link>
                    </Stack>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={loginRoute}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
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
    // </div> */}
  );
}
