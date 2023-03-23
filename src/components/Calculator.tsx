import { MouseEvent } from "react";
import {
  VStack,
  Box,
  Text,
  Center,
  Button,
  Flex,
  HStack,
  Divider,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState("0");
  const [oldNum, setOldNum] = useState("0");
  const [operator, setOperator] = useState(" ");

  const inputButton = (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as HTMLInputElement).value === ".") {
      var input = parseFloat((event.target as HTMLInputElement).value);
      var inputString = input.toString();
      //numString = num.toString();
      if (num === "0") {
        setNum(inputString);
      } else {
        setNum(num + ".");
      }
    } else {
      input = parseFloat((event.target as HTMLInputElement).value);
      inputString = input.toString();
      //numString = num.toString();
      if (num === "0") {
        setNum(inputString);
      } else {
        setNum(num + inputString);
      }
    }
  };
  function clear() {
    setNum("0");
  }

  function percentage() {
    parseFloat(num);
    var perc = parseFloat(num) / 100;
    setNum(perc.toString());
  }

  function toInvert() {
    if (parseFloat(num) > 0) {
      setNum("-" + num);
    } else if (parseFloat(num) < 0) {
      setNum((parseFloat(num) * -1).toString());
    }
  }
  const operatorHandler = (event: MouseEvent<HTMLButtonElement>) => {
    var operatorInput = (event.target as HTMLInputElement).value;

    setOperator(operatorInput);
    setOldNum(num);
    setNum("0");
  };

  function calculate() {
    var oldNumNumber = parseFloat(oldNum);
    var numNumber = parseFloat(num);
    if (operator === "/") {
      setNum((oldNumNumber / numNumber).toString());
    } else if (operator === "X") {
      setNum((oldNumNumber * numNumber).toString());
    } else if (operator === "-") {
      setNum((oldNumNumber - numNumber).toString());
    } else if (operator === "+") {
      setNum((oldNumNumber + numNumber).toString());
    }
  }

  return (
    <Center>
      <VStack w="350px" h="550" bg="#4169E1" marginTop="80px">
        <HStack>
          <Flex w="300px" h="50px" marginTop="50px" marginBottom="50px">
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
        <Divider />
        <Flex flexDirection="column" h="350px" justifyContent="space-between">
          <Flex w="300px" justifyContent="space-between">
            <Flex w="150px">
              <Button
                bg="white"
                w="60px"
                h="60px"
                borderRadius="50%"
                color="red"
                onClick={clear}
              >
                {" "}
                C{" "}
              </Button>
            </Flex>
            <Flex w="150px" justifyContent="space-between">
              <Button
                bg="white"
                w="60px"
                h="60px"
                borderRadius="50%"
                marginLeft="10px"
                color="green"
                onClick={percentage}
              >
                {" "}
                <strong>%</strong>{" "}
              </Button>
              <Button
                bg="white"
                w="60px"
                h="60px"
                borderRadius="50%"
                color="green"
                onClick={operatorHandler}
                value={"/"}
              >
                {" "}
                <strong>/</strong>{" "}
              </Button>
            </Flex>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button
              onClick={inputButton}
              value={"7"}
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
            >
              {" "}
              7{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={"8"}
            >
              {" "}
              8{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={9}
            >
              {" "}
              9{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              color="green"
              onClick={operatorHandler}
              value={"X"}
            >
              {" "}
              <strong> x </strong>{" "}
            </Button>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={4}
            >
              {" "}
              4{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={5}
            >
              {" "}
              5{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={6}
            >
              {" "}
              6{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              color="green"
              onClick={operatorHandler}
              value={"-"}
            >
              {" "}
              <strong> - </strong>{" "}
            </Button>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={1}
            >
              {" "}
              1{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={2}
            >
              {" "}
              2{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={3}
            >
              {" "}
              3{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              color="green"
              onClick={operatorHandler}
              value={"+"}
            >
              {" "}
              <strong>+</strong>{" "}
            </Button>
          </Flex>
          <Flex w="300px" justifyContent="space-between">
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={toInvert}
            >
              {" "}
              +/-{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={0}
            >
              {" "}
              0{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              onClick={inputButton}
              value={"."}
            >
              {" "}
              .{" "}
            </Button>
            <Button
              bg="white"
              w="60px"
              h="60px"
              borderRadius="50%"
              color="green"
              onClick={calculate}
            >
              {" "}
              <strong>=</strong>{" "}
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Center>
  );
}
