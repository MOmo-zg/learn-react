import { Box, Grid } from "@chakra-ui/react";
import { TextComponent, CenterHearder } from "../components/CenterHearder";
import PopoverPrompt from "../components/PopoverPrompt";

function HeaderView() {
  // 响应式数组
  const fontSizeList = ["10px", "10px", "15px"];
  const heightList = [10, 20, 20];

  return (
    <Box borderColor="black.500">
      <Grid templateColumns="repeat(13,1fr)">
        <CenterHearder
          colSpan={2}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">LOGOQQ音乐</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          bg="green"
          color="white"
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#" colorText="white !important">
            音乐馆
          </TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">我的音乐</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">客户端</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">开发平台</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">VIP</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={2}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <PopoverPrompt></PopoverPrompt>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">登录</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={2}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">开通VIP</TextComponent>
        </CenterHearder>
        <CenterHearder
          colSpan={1}
          h={heightList}
          fontSize={{
            base: fontSizeList[0],
            sm: fontSizeList[1],
            md: fontSizeList[2],
          }}
        >
          <TextComponent path="#">充值</TextComponent>
        </CenterHearder>
      </Grid>
    </Box>
  );
}

export default HeaderView;
