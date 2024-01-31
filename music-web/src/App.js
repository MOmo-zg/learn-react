import { Container, Divider} from "@chakra-ui/react";
import HeaderView from "./view/HeaderView";

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {/* 准备容器 */}

      <Container maxW="1000px" bg="black.500">
          <HeaderView></HeaderView>
          <Divider></Divider>
      </Container>

    </>
  );
}

export default App;
