/* eslint-disable react/prop-types */
import { Flex, Text } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";
import { LightMode } from "../redux/light-dark/lightDarkTypes";

const CustomToolTip = ({ active, payload }) => {
  const mode = useSelector((store) => store.lightDarkMode);

  if (active)
    return (
      <Flex
        css={{
          padding: "20px",
          backgroundColor: mode === LightMode ? "#FFFFFF" : "#3A3A3C",
          boxShadow: "0px 8px 16px 0px #3232470F",
          borderRadius: "10px",
        }}
        flexDirection="column"
        gap="5px"
        // className="tooltip"
      >
        <Text
          css={{
            fontSize: "$xs",
            color: "$textSecondary",
          }}
        >
          This month
        </Text>
        <Text
          css={{
            fontSize: "$md",
            color: "$textPrimary",
            fontWeight: "700",
          }}
        >
          This month uv {payload[0]?.payload?.uv}
        </Text>
      </Flex>
    );
  else return null;
};

export default CustomToolTip;
