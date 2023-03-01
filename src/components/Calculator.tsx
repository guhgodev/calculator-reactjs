import { MouseEvent } from "react";
import {
  VStack,
  Box,
  Text,
  Center,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState(0);

  const inputButton = (event: MouseEvent<HTMLButtonElement>) => {
    var input = parseFloat((event.target as HTMLInputElement).value);
    var inputString = input.toString();
    var numString = num.toString();
    if (num === 0) {
      setNum(input);
    } else {
      setNum(parseFloat(numString + inputString));
    }
  };

  function clear() {
    setNum(0);
  }

  function percentage() {
    setNum(num / 100);
  }

  return (
    <Center>
      <VStack w="400px" h="600" bg="blue" marginTop="80px">
        <HStack>
          <Flex
            w="350px"
            h="100px"
            bg="red"
            marginTop="60px"
            marginBottom="60px"
          >
            <Flex
              w="350px"
              h="100px"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Text fontSize="2em" color="white">
                {" "}
                {num}
              </Text>
            </Flex>
          </Flex>
        </HStack>
        <Flex flexDirection="column" h="300px" justifyContent="space-between">
          <Flex w="300px" justifyContent="space-between">
            <Flex w="150px">
              <Button
                bg="white"
                w="30px"
                h="40px"
                borderRadius="50%"
                onClick={clear}
              >
                {" "}
                C{" "}
              </Button>
            </Flex>
            <Flex w="150px" justifyContent="space-between">
              <Button
                bg="white"
                w="30px"
                h="40px"
                borderRadius="50%"
                marginLeft="25px"
                onClick={percentage}
              >
                {" "}
                %{" "}
              </Button>
              <Button bg="white" w="30px" h="40px" borderRadius="50%">
                {" "}
                /{" "}
              </Button>
            </Flex>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button
              onClick={inputButton}
              value={7}
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
            >
              {" "}
              7{" "}
            </Button>
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={8}
            >
              {" "}
              8{" "}
            </Button>
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={9}
            >
              {" "}
              9{" "}
            </Button>
            <Button bg="white" w="30px" h="40px" borderRadius="50%">
              {" "}
              X{" "}
            </Button>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={4}
            >
              {" "}
              4{" "}
            </Button>
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={5}
            >
              {" "}
              5{" "}
            </Button>
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={6}
            >
              {" "}
              6{" "}
            </Button>
            <Button bg="white" w="30px" h="40px" borderRadius="50%">
              {" "}
              -{" "}
            </Button>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={1}
            >
              {" "}
              1{" "}
            </Button>
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={2}
            >
              {" "}
              2{" "}
            </Button>
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={3}
            >
              {" "}
              3{" "}
            </Button>
            <Button bg="white" w="30px" h="40px" borderRadius="50%">
              {" "}
              +{" "}
            </Button>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button bg="white" w="30px" h="40px" borderRadius="50%">
              {" "}
              +/-{" "}
            </Button>
            <Button
              bg="white"
              w="30px"
              h="40px"
              borderRadius="50%"
              onClick={inputButton}
              value={0}
            >
              {" "}
              0{" "}
            </Button>
            <Button bg="white" w="30px" h="40px" borderRadius="50%">
              {" "}
              ,{" "}
            </Button>
            <Button bg="white" w="30px" h="40px" borderRadius="50%">
              {" "}
              ={" "}
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Center>
  );
}
