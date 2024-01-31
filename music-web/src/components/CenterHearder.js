import { GridItem, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CenterHearder = styled(GridItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextHearder = styled(Text)`
  color: black;
  &:hover {
    color: green;
  }
`;
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
