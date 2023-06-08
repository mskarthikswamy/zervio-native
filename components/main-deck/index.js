import { Box, HStack, Text, Heading, Button, VStack, Flex } from "native-base";
import Svg, { Use, Image } from "react-native-svg";

const MainDeck = () => {
  return (
    <Box pt="4">
      <Box
        width="100%"
        rounded="3xl"
        height="290px"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          // borderWidth: 0,
        }}
        _light={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <HStack
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          padding={"2rem"}
        >
          <Heading size="md" ml="3" color="#0B091D">
            Main Deck
          </Heading>

          <Flex gap={"2rem"} alignItems={"center"} paddingRight={"4px"}>
            <Button width={"48px"} height={"48px"} borderRadius={"3xl"}>
              <Svg width="48" height="48">
                <Image href={require("/assets/fullsize.svg")} />
              </Svg>
            </Button>
            <Button width={"48px"} height={"48px"} borderRadius={"3xl"}>
              <Svg width="48" height="48">
                <Image href={require("/assets/zoom.svg")} />
              </Svg>
            </Button>
            <Text>100%</Text>
            <Button width={"48px"} height={"48px"} borderRadius={"3xl"}>
              <Svg width="48" height="48">
                <Image href={require("/assets/zoom-out.svg")} />
              </Svg>
            </Button>
          </Flex>
        </HStack>

        <Box ml="5" alignItems="center" paddingBottom={8}>
          <Image
            source="https://sale.ruyachts.com/images/cantiere-delle-marche/flexplorer-117/deckplan/cantiere-delle-marche-flexplorer-117-deckplan-4.png"
            alt="Alternate Text"
            height="409"
            width="724"
            borderRadius="20"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainDeck;
