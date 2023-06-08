const Card = () => {
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
    ></Box>
  );
};

export default Card;
