// import { Button, useColorMode, Text, Box, Container, Flex, Square } from "@chakra-ui/react";
// import { Text } from '@chakra-ui/react';
import "./App.css";
import { Container } from "@chakra-ui/react";
import HeaderView from "./view/HeaderView";
import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    display:flex;
    justify-content: center;
    align-items: center;
`

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {/* <Button onClick={toggleColorMode}>
        切换颜色模式({colorMode === "light" ? "亮色模式" : "暗色模式"})
      </Button>
      <Text color="primary">这是文本</Text>
      <Container maxW="1980px" bg="blue.800" centerContent>
        <Box padding="10" bg="blue.400" color="black" maxW="100%">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      <Flex w="100%" color="black.100">
        <Square w="33.33%" bg="blue.100">
          盒子 1
        </Square>
        <Square w="33.33%" bg="blue.200">
          Box 2
        </Square>
        <Square w="33.33%" bg="blue.300">
          Box 3
        </Square>
      </Flex> 
      </Container> */}
      {/* 添加全局样式表 */}
      <GlobalStyle></GlobalStyle>
      {/* 准备容器 */}
      <Container maxW="1000px" bg="black.500">
        <HeaderView></HeaderView>
      </Container>

    </>
  );
}

export default App;
