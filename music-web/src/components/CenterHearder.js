import { GridItem,Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CenterHearder = styled(GridItem)`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const TextHearder = styled(Text)`
    text-align:"center";
    color: black;
    &:hover {
        color: green;
    }
`

function TextComponent({path,children}){
    return(
        <>
            <TextHearder as='a' href={path}>{children}</TextHearder>
        </>
    )
}

export default CenterHearder;
export {TextComponent}