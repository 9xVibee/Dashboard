/* eslint-disable react/prop-types */
import { Flex, Text } from "@sparrowengg/twigs-react";

const CustomToolTip = ({ active, payload, label }) => {
  console.log(payload[0]?.payload, label);

  if (active)
    return (
      <Flex
        css={{
          padding: "14px",
          backgroundColor: "$primary",
          boxShadow: "0px 8px 16px 0px #32324714",
          borderRadius: "8px",
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
