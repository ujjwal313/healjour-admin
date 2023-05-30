// import React from "react";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

const Orders = () => {
  return (
    <VStack w="100vw" minH="100vh" spacing={0}>
      <Flex
        w="100%"
        p="20px"
        boxShadow="md"
        borderRadius="8px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={logo} />
        <Text>Center Name</Text>
        <FiLogOut color="red" />
      </Flex>
      <Flex flex={1} w="100%" p="16px" gap="24px">
        <VStack boxShadow="lg" borderRadius="12px">
          {[
            "Orders",
            "Admin",
            "XRay",
            "CT",
            "MRI",
            "Ultrasound",
            "Mammo",
            "Echo",
          ].map((subcat) => {
            return (
              <Box
                key={subcat}
                py="16px"
                px="50px"
                borderBottom="1px solid lightgrey"
                w="100%"
                textAlign="center"
                cursor="pointer"
              >
                <Text>{subcat}</Text>
              </Box>
            );
          })}
        </VStack>
        <VStack flex={1} boxShadow="lg" borderRadius="12px"></VStack>
      </Flex>
    </VStack>
  );
};

export default Orders;
