import React from "react";
import { GridItem } from "@chakra-ui/react";

function GridItemList() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const listItems = numbers.map((number) => (
    <GridItem
      key={number.toString()}
      w={"100%"}
      h={"120px"}
      bg={"blue.200"}
    ></GridItem>
  ));
  return listItems;
}

export default GridItemList;
