import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
// import GridItemList from "../components/GridItemList";
import CenterHearder from "../components/CenterHearder";

function HeaderView() {
  const giH = 20
  return (
    <Box borderBottom="2px" borderColor="black.500">
      <Grid templateColumns="repeat(12,1fr)" gap={1}>
        <GridItem
          colSpan={2}
          h={giH}
          bg="blue.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text textAlign="center">LOGOQQ音乐</Text>
        </GridItem>
        <GridItem 
          colSpan={1}
          h={giH}
          bg={"blue.200"}
        ></GridItem>
        <CenterHearder colSpan={2}>2222</CenterHearder>
      </Grid>
    </Box>
  );
}

export default HeaderView;

