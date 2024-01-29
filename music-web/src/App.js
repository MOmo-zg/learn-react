import { Button, useColorMode, Text } from '@chakra-ui/react';
// import { Text } from '@chakra-ui/react';
import './App.css';

function App() {
  const {colorMode,toggleColorMode} = useColorMode()
  return (
    <>
      <Button onClick={toggleColorMode}>
        切换颜色模式({colorMode==="light" ? "亮色模式":"暗色模式"})
      </Button>
      <Text color="primary">这是文本</Text>
    </>
  );
}

export default App;
