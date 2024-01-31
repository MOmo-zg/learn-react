import { BoxContair, BoxCenter } from "./PopoverPrompt";
import { Flex, Spacer } from "@chakra-ui/react";

function BoxContairCenter({music,onSetValue}) {
  return (
    <BoxContair as="a" href="#" onClick={(event)=>{
      console.log("run")
      onSetValue(music.title)}}>
      <Flex h="100%">
        <BoxCenter>{music.id}</BoxCenter>
        <BoxCenter>{music.title}</BoxCenter>
        <Spacer></Spacer>
        <BoxCenter>{music.person}</BoxCenter>
      </Flex>
    </BoxContair>
  );
}

export default BoxContairCenter