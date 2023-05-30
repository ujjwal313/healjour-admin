import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    isSuperAdmin: false,
  });
  const navigate = useNavigate();
  return (
    <Center minH="100vh" w="100vw" background="#F1F4F6">
      <Stack
        p="2rem"
        minWidth="30%"
        background="#FFFFFF"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.12)"
        borderRadius="20px"
      >
        <Stack align="center" spacing="1rem">
          <Image src={logo} />
          <Heading fontSize="18px" fontWeight={600}>
            Welcome, Sign into your account
          </Heading>
        </Stack>
        <FormControl id="email" pt="24px">
          <HStack
            border="1px solid #D1D1D6"
            p="12px"
            borderRadius="8px"
            _focusWithin={{ borderColor: "#148397" }}
          >
            <AiOutlineMail color="rgba(24, 36, 62, 0.4)" size="20px" />
            <VStack flex={1} alignItems="flex-start">
              <FormLabel
                m={0}
                fontSize="11px"
                fontWeight={400}
                color="rgba(0, 0, 0, 0.8)"
              >
                Email
              </FormLabel>

              <Input
                type="text"
                p={0}
                mt="0px !important"
                h="auto"
                focusBorderColor="none"
                border="none"
                placeholder="Enter your email"
                _placeholder={{ fontSize: "14px", fontWeight: 500 }}
                _focus={{ outline: "none" }}
                _focusVisible={{ boxShadow: "none" }}
                value={loginState.email}
                onChange={(e) =>
                  setLoginState((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </VStack>
          </HStack>
        </FormControl>
        <FormControl id="password" pt="12px">
          <HStack
            border="1px solid #D1D1D6"
            p="12px"
            borderRadius="8px"
            _focusWithin={{ border: "1px solid #148397" }}
          >
            <MdOutlinePassword color="rgba(24, 36, 62, 0.4)" size="20px" />
            <VStack flex={1} alignItems="flex-start">
              <FormLabel
                m={0}
                fontSize="11px"
                fontWeight={400}
                color="rgba(0, 0, 0, 0.8)"
              >
                Password
              </FormLabel>

              <Input
                type={"password"}
                p={0}
                mt="0px !important"
                h="auto"
                focusBorderColor="none"
                border="none"
                placeholder="Enter your password"
                _placeholder={{ fontSize: "14px", fontWeight: 500 }}
                _focus={{ outline: "none" }}
                _focusVisible={{ boxShadow: "none" }}
                value={loginState.password}
                onChange={(e) =>
                  setLoginState((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </VStack>
          </HStack>
        </FormControl>
        <Checkbox
          colorScheme="teal"
          pb="1rem"
          isChecked={loginState.isSuperAdmin}
          onChange={(e) =>
            setLoginState((prev) => ({
              ...prev,
              isSuperAdmin: e.target.checked,
            }))
          }
          defaultChecked={false}
        >
          Super Admin
        </Checkbox>

        <Button
          bg="#21B34A"
          color={"white"}
          _hover={{
            bg: "#21B34A",
          }}
          _active={{
            bg: "#21B34A",
          }}
          _focus={{
            outline: "none",
          }}
          borderRadius={"100px"}
          onClick={() => {
            alert(JSON.stringify(loginState, null, 2));
            navigate("/orders");
          }}
        >
          Sign In
        </Button>
      </Stack>
    </Center>
  );
};

export default Login;
