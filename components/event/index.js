import { Box, Stack, Heading, Text, HStack, Flex } from "native-base";
import Svg, { Use, Image } from "react-native-svg";

const Event = () => {
  return (
    <Box
      marginLeft={"6"}
      width="100%"
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
        shadow: 1,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <Stack space={2}>
        <Heading size="md" ml="5" pt="4" color="#0B091D">
          Events
        </Heading>
        <Text ml="5" color="#989DAB">
          Activity on May 9, 2023
        </Text>
      </Stack>
      <Box alignItems="center" pt="2" p={"3"}>
        <Box
          width="100%"
          rounded="2xl"
          height="20"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "#F5FAFD",
          }}
        >
          <HStack
            alignItems="center"
            justifyContent={"space-between"}
            paddingRight={"17px"}
            paddingTop={"10px"}
          >
            <Text ml="3" pt="2" color="#989DAB">
              16:39:10
            </Text>
            <Svg width="16" height="16">
              <Image href={require("/assets/unlock-outline.svg")} />
            </Svg>
          </HStack>

          <Text ml="3" pt="2" color="#0B091D">
            Martin Smith Unlocked Garage Door
          </Text>
        </Box>
      </Box>
      <Box alignItems="center" pt="2" p={"3"}>
        <Box
          width="100%"
          rounded="2xl"
          height="20"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "#F5FAFD",
          }}
        >
          <HStack
            paddingTop={"10px"}
            alignItems="center"
            justifyContent={"space-between"}
            paddingRight={"17px"}
          >
            <Text ml="3" pt="2" color="#989DAB">
              16:39:10
            </Text>
            <Svg width="16" height="16">
              <Image href={require("/assets/caution.svg")} />
            </Svg>
          </HStack>

          <Text ml="3" pt="2" color="#0B091D">
            Intruder alarm cancelled by Ben Smith
          </Text>
        </Box>
      </Box>
      <Box alignItems="center" pt="2" p={"3"}>
        <Box
          width="100%"
          rounded="2xl"
          height="20"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "#F5FAFD",
          }}
        >
          <Stack>
            <HStack
              paddingTop={"10px"}
              alignItems="center"
              justifyContent={"space-between"}
              paddingRight={"17px"}
            >
              <Text ml="3" pt="2" color="#989DAB">
                16:39:10
              </Text>
              <Svg width="16" height="16">
                <Image href={require("/assets/closed-outine.svg")} />
              </Svg>
            </HStack>
          </Stack>

          <Text ml="3" pt="2" color="#0B091D">
            Garage Door Closed
          </Text>
        </Box>
      </Box>
      <Box alignItems="center" pt="2" p={"3"}>
        <Box
          width="100%"
          rounded="2xl"
          height="20"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "#F5FAFD",
          }}
        >
          <HStack
            paddingTop={"10px"}
            alignItems="center"
            justifyContent={"space-between"}
            paddingRight={"17px"}
          >
            <Text ml="3" pt="2" color="#989DAB">
              16:39:10
            </Text>
            <Svg width="16" height="16">
              <Image href={require("/assets/people.svg")} />
            </Svg>
          </HStack>

          <Text ml="3" pt="2" color="#0B091D">
            3 People in Garage Camera View
          </Text>
        </Box>
      </Box>
      <Box alignItems="center" pt={2} p={"3"}>
        <Box
          width="100%"
          rounded="2xl"
          height="25"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "#F5FAFD",
          }}
        >
          <Text ml="3" pt="2" color="#989DAB">
            16:39:10
          </Text>
          <Text ml="3" pt="2" color="#0B091D">
            Jetski rear garage perimeter
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Event;
