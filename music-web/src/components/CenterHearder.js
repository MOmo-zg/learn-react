import { GridItem, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

// 水平居中 垂直居中
const CenterHearder = styled(GridItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 为文字添加鼠标悬浮变化
const TextHearder = styled(Text)`
  color: black;
  &:hover {
    color: green;
  }
`;

// 包装 组件
function TextComponent({ path, colorText, children }) {
  return (
    <>
      <TextHearder as="a" href={path} color={colorText}>
        {children}
      </TextHearder>
    </>
  );
}

export { TextComponent, CenterHearder };
