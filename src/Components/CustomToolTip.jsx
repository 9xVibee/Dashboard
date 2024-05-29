/* eslint-disable react/prop-types */
import { Flex, Text } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";
import { LightMode } from "../redux/light-dark/lightDarkTypes";

const CustomToolTip = ({ active, payload }) => {
  const mode = useSelector((store) => store.lightdarkmode.lightDarkMode);

  if (active && payload)
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
      >
        <Text
          css={{
            fontSize: "$xs",
            color: "$textSecondary",
          }}
        >
          {payload[0]?.payload?.category} : ₹{payload[0]?.payload?.price}
        </Text>
        <Text
          css={{
            fontSize: "$md",
            color: "$textPrimary",
            fontWeight: "700",
          }}
        >
          {payload[0].payload?.formattedDate}
        </Text>
      </Flex>
    );
  else return null;
};

export default CustomToolTip;
