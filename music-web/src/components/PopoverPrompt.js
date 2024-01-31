import {
  InputGroup,
  InputRightElement,
  Input,
  Box,
  SimpleGrid,
  ScaleFade,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import BoxContairCenter from "./BoxContairCenter";
import { musics } from "../model/musices";
import { useState } from "react";

export const ChangeInput = styled(Input)`
  font-size: xx-small;
  &:focus {
    border: 1px solid;
    border-color: inherit;
    box-shadow: none;
  }
`;
export const ContentDiv = styled.div`
  position: relative;
  z-index: 999;
`;

export const BoxCenter = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 4px 0 10px;
  font-size: x-small;
`;

export const BoxContair = styled(Box)`
  background-color: white;
  height: 40px;
  &:hover {
    background-color: green;
  }
`;

function PopoverPrompt() {
  const [valueInput, setValueInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (title) => {
    setValueInput(title);
  };

  const handleOnblur = (event) => {
    // 使用 event.currentTarget.contains(event.relatedTarget) 来检查失去焦点的元素是否在组件内部。
    // 如果失去焦点的元素不在组件内部（即点击了组件以外的区域），则隐藏组件。
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    // 将onBlur 添加到根节点效果 比较好
    <ContentDiv onBlur={handleOnblur}>
      <InputGroup>
        <InputRightElement>
          <SearchIcon
            color="gray.300"
            _hover={{
              color: "green",
            }}
          ></SearchIcon>
        </InputRightElement>
        {/* 要改变value 必须添加onChange onChange会自动将value作为尝试传递给handleChange */}
        <ChangeInput
          value={valueInput}
          placeholder="搜索音乐"
          onFocus={() => {
            setIsOpen(true);
          }}
          onChange={handleChange}
        ></ChangeInput>
      </InputGroup>
      {/* 过渡组件包装一个SimpleGrid网格 */}
      <ScaleFade initialScale={0.5} in={isOpen}>
        <Box
          border="1px solid"
          borderColor="gray.300"
          w="100%"
          position="absolute"
        >
          <SimpleGrid columns={1}>
            {/* map 只能遍历数组 要使用Object.entries 才行 解构赋值自动分个欸key，music */}
            {Object.entries(musics).map(([key, music]) => (
              <BoxContairCenter
                key={key}
                music={music}
                onSetValue={handleChange}
              ></BoxContairCenter>
            ))}
          </SimpleGrid>
        </Box>
      </ScaleFade>
    </ContentDiv>
  );
}

export default PopoverPrompt;
