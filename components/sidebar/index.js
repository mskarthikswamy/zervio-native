import { Container, VStack } from "native-base";
import { Text } from "native-base";
import { Box } from "native-base";
import { FlatList } from "native-base";
import { Stack, Heading, HStack, flex } from "native-base";
import { Icon } from "react-native";
import Svg, { Use, Image } from "react-native-svg";

const SideMenu = () => {
  return (
    <>
      <Box ml={4} safeAreaTop mt={"20px"}>
        <Text bold fontSize="4xl">
          Zones
        </Text>
      </Box>

      <Box ml={4} pt={10}>
        <Text bold fontSize="2xl">
          Cameras
        </Text>
      </Box>
      <Box ml={3}>
        <Box>
          <Box pt={4}>
            <Box
              width={"100%"}
              // alignItems="center"
              rounded="lg"
              overflow="hidden"
              borderColor="#2298BD"
              borderWidth="1"
              borderRadius={20}
              _dark={{
                borderColor: "#2298BD",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading fontSize={16} ml="-1" color="#2298BD">
                    Port Side Galley
                  </Heading>
                  <HStack space={3} pt="3">
                    <Svg width="16" height="16">
                      <Image href={require("/assets/visible.svg")} />
                    </Svg>

                    <Text
                      fontSize="14"
                      _light={{
                        color: "#0B091D",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      Visible
                    </Text>
                  </HStack>
                  <HStack space={3}>
                    <Svg width="16" height="16">
                      <Image href={require("/assets/techaware.svg")} />
                    </Svg>

                    <Text
                      fontSize="14"
                      _light={{
                        color: "#0B091D",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      Enabled
                    </Text>
                  </HStack>

                  <HStack space={3}>
                    <Svg width="16" height="16">
                      <Image href={require("/assets/visible.svg")} />
                    </Svg>

                    <Text
                      fontSize="14"
                      _light={{
                        color: "#0B091D",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      Motion On
                    </Text>
                  </HStack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box pt={4}>
          <Box
            width={"100%"}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            borderRadius={20}
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading fontSize={16} ml="-1" color="#0B091D">
                  Crew Quarter Corridor
                </Heading>
                <HStack space={3} pt="3">
                  <Svg width="16" height="16">
                    <Image href={require("/assets/lift.svg")} />
                  </Svg>

                  <Text
                    fontSize="14"
                    _light={{
                      color: "#0B091D",
                    }}
                    _dark={{
                      color: "violet.400",
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Lifted Up
                  </Text>
                </HStack>
                <HStack space={3}>
                  <Svg width="16" height="16">
                    <Image href={require("/assets/hide.svg")} />
                  </Svg>

                  <Text
                    fontSize="14"
                    _light={{
                      color: "#0B091D",
                    }}
                    _dark={{
                      color: "violet.400",
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Disabled
                  </Text>
                </HStack>

                <HStack space={3}>
                  <Svg width="16" height="16">
                    <Image href={require("/assets/visible.svg")} />
                  </Svg>

                  <Text
                    fontSize="14"
                    _light={{
                      color: "#0B091D",
                    }}
                    _dark={{
                      color: "violet.400",
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Motion On
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box pt={4}>
          <Box
            width={"100%"}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            borderRadius={20}
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading fontSize={16} ml="-1" color="#0B091D">
                  Crew Quarter Corridor
                </Heading>
                <HStack space={3} pt="3">
                  <Svg width="16" height="16">
                    <Image href={require("/assets/lift.svg")} />
                  </Svg>

                  <Text
                    fontSize="14"
                    _light={{
                      color: "#0B091D",
                    }}
                    _dark={{
                      color: "violet.400",
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Lifted Up
                  </Text>
                </HStack>
                <HStack space={3}>
                  <Svg width="16" height="16">
                    <Image href={require("/assets/hide.svg")} />
                  </Svg>

                  <Text
                    fontSize="14"
                    _light={{
                      color: "#0B091D",
                    }}
                    _dark={{
                      color: "violet.400",
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Disabled
                  </Text>
                </HStack>

                <HStack space={3}>
                  <Svg width="16" height="16">
                    <Image href={require("/assets/visible.svg")} />
                  </Svg>

                  <Text
                    fontSize="14"
                    _light={{
                      color: "#0B091D",
                    }}
                    _dark={{
                      color: "violet.400",
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Motion On
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box ml={4} pt={16}>
        <Text bold fontSize="2xl">
          Doors
        </Text>
      </Box>
      <Box pt={4} pl={3}>
        <Box
          width="100%"
          height="96px"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          borderRadius={20}
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Stack p="4" space={3}>
            <Stack space={2}>
              <HStack space={12}>
                <Heading size="md" ml="-1" color="#0B091D">
                  Front Door
                </Heading>
                <Svg width="24" height="24">
                  <Image href={require("/assets/lock.svg")} />
                </Svg>
              </HStack>

              <HStack space={12}>
                <Text color="#989DAB">11/04/2023</Text>
                <Text color="#989DAB">Locked</Text>
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box pt={4} pl={3}>
        <Box
          width="100%"
          height="96px"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          borderRadius={20}
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Stack p="4" space={3}>
            <Stack space={2}>
              <HStack space={12}>
                <Heading size="md" ml="-1" color="#0B091D">
                  Back Door
                </Heading>
                <Svg width="24" height="24">
                  <Image href={require("/assets/unlocked.svg")} />
                </Svg>
              </HStack>

              <HStack space={12}>
                <Text color="#989DAB">11/04/2023</Text>
                <Text color="#989DAB">Unlocked</Text>
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default SideMenu;
