import { Text, Box, HStack, Heading, Button, Flex } from "native-base";
// import { Image, View } from "react-native";
import Svg, { Use, Image } from "react-native-svg";
const Galley = () => {
  return (
    <Box
      marginLeft={"8"}
      width={"100%"}
      rounded="3xl"
      height="505"
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
      <HStack space={6} alignItems={"center"} justifyContent={"space-between"}>
        <HStack space={8}>
          <Heading size="md" ml="5" pt="4" color="#0B091D">
            Galley: Port Side Galley
          </Heading>
          <Text pt={5} color="#989DAB" marginLeft={"5px"}>
            3 People
          </Text>
        </HStack>

        <HStack space={4} padding={"3"} pt="4">
          <Button width={"32px"} height={"32px"} borderRadius={"3xl"}>
            <Svg width="32" height="32">
              <Image href={require("/assets/galley-motion.svg")} />
            </Svg>
          </Button>
          <Button width={"32px"} height={"32px"} borderRadius={"3xl"}>
            <Svg width="32" height="32">
              <Image href={require("/assets/screen-size.svg")} />
            </Svg>
          </Button>
          <Button width={"32px"} height={"32px"} borderRadius={"3xl"}>
            <Svg width="32" height="32">
              <Image href={require("/assets/options.svg")} />
            </Svg>
          </Button>
        </HStack>
      </HStack>

      <Box pt="6" ml="5" pr={"6"}>
        <Image
          source="https://media.istockphoto.com/id/176673015/photo/old-galley.jpg?s=612x612&w=0&k=20&c=hMcLYCjjZ0YKrmlFNMQjYwtGOLiy_or-kau4kjwyiqI="
          alt="Alternate Text"
          size=""
          height="409"
          width="100%"
          borderRadius="20"
        />
      </Box>
    </Box>
  );
};

export default Galley;
