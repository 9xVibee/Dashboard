import { Box } from "@sparrowengg/twigs-react";

const CustomProgressBar = () => {
  return (
    <Box
      css={{
        width: "486px",
        borderRadius: "18px",
        overflow: "hidden",
        height: "15px",
        backgroundColor: "$lightPurple",
        marginTop: "20px",
      }}
    >
      <Box
        css={{
          width: `${30}%`,
          height: "100%",
          backgroundColor: "$mediumPurple",
          borderRadius: "18px",
        }}
      ></Box>
    </Box>
  );
};

export default CustomProgressBar;
