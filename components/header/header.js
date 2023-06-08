import { Button, HStack } from "native-base";
import { Text, Box, Flex } from "native-base";
import Svg, { Use, Image } from "react-native-svg";
const Header = () => {
  return (
    <>
      <HStack alignItems={"center"} justifyContent={"space-around"}>
        <Flex flexDirection={"row"} paddingLeft={"20%"} gap={"2rem"}>
          <Box>
            <Svg width="48" height="48">
              <Image href={require("/assets/arrowLeft.svg")} />
            </Svg>
          </Box>
          <Button borderRadius={"3xl"} width={"162px"} height={"48px"}>
            Bridge
          </Button>
          <Button borderRadius={"3xl"} width={"162px"} height={"48px"}>
            Galley
          </Button>
          <Button borderRadius={"3xl"} width={"162px"} height={"48px"}>
            Crew Quarters
          </Button>
          <Button borderRadius={"3xl"} width={"162px"} height={"48px"}>
            Stair Cases
          </Button>
          <Box>
            <Svg width="48" height="48">
              <Image href={require("/assets/rightarrow.svg")} />
            </Svg>
          </Box>
        </Flex>
        <Button width={"48px"} height={"48px"} borderRadius={"3xl"}>
          <Svg width="48" height="48">
            <Image href={require("/assets/setting.svg")} />
          </Svg>
        </Button>
      </HStack>
    </>
  );
};

export default Header;
