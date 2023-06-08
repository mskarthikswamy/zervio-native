import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, HStack, VStack, Flex } from "native-base";
// import { VStack } from "native-base";
// import SideMenu from "./components/sidebar";
import Event from "./components/event";
import Galley from "./components/galley";
import SideMenu from "./components/sidebar";
import MainDeck from "./components/main-deck";
import Header from "./components/header/header";

export default function App() {
  return (
    <NativeBaseProvider>
      <Flex flexDirection={"row"}>
        <Box width={"15%"}>
          <SideMenu />
        </Box>

        <Box width="85%" paddingTop={"20px"}>
          <VStack width="100%">
            <Header />
            <Flex flexDirection="row" marginTop={"12"}>
              <Box width="72%">
                <Galley />
              </Box>
              <Box paddingLeft={8} width="25%">
                <Event />
              </Box>
            </Flex>
            <Box paddingLeft={"8"} width="99%">
              <MainDeck />
            </Box>
          </VStack>
        </Box>
      </Flex>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6F8",
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
  },
});
