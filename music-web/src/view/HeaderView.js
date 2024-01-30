import { Box, Grid,Text} from "@chakra-ui/react";
import { TextComponent,CenterHearder} from "../components/CenterHearder";


function HeaderView() {
  // 响应式数组
  const fontSizeList = ["10px","10px","15px"]
  const heightList = [30,20,20]

  return (
    <Box borderBottom="2px" borderColor="black.500">
      <Grid templateColumns="repeat(13,1fr)">
        <CenterHearder
          colSpan={2}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">LOGOQQ音乐</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          bg="green"
          color="white"
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <Text>音乐馆</Text>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">我的音乐</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">客户端</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">开发平台</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">VIP</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={2}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">搜索框</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">登录</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={2}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">开通VIP</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{base:fontSizeList[0], 
            sm:fontSizeList[1], 
            md:fontSizeList[2]}}
        >
          <TextComponent path="#">充值</TextComponent>
        </CenterHearder>
      </Grid>
    </Box>
  );
}

export default HeaderView;

