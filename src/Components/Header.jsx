import { Box, Flex, Text, Tooltip } from "@sparrowengg/twigs-react";
import SearchIcon from "./../asset/search.svg";
import DownArrow from "./../asset/downArrow.svg";
import Profile from "./../asset/profile.png";
import Sun from "./../asset/sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { DarkMode, LightMode } from "../redux/light-dark/lightDarkTypes";

const Header = () => {
  const mode = useSelector((store) => store.lightDarkMode);
  const dispatch = useDispatch();

  const handleModeChange = () => {
    dispatch({
      type: mode === LightMode ? DarkMode : LightMode,
    });
  };

  return (
    <Flex
      css={{
        width: "100%",
        backgroundColor: "$primary",
        padding: "16px 30px",
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      {/* header left section */}
      <Flex alignItems="center" gap="40px">
        <Flex justifyContent="flex-start" gap="40px">
          <Text
            css={{
              fontSize: "$md",
              fontWeight: 600,
              color: "$textPrimary",
              cursor: "pointer",
            }}
          >
            Dashboard
          </Text>
          <Text
            css={{
              fontSize: "$md",
              cursor: "pointer",
              fontWeight: 600,
              color: "$textSecondary",
            }}
          >
            Advanced Quarry
          </Text>
          <Text
            css={{
              cursor: "pointer",
              fontSize: "$md",
              fontWeight: 600,
              color: "$textSecondary",
            }}
          >
            Events
          </Text>
        </Flex>

        <Box
          css={{
            width: "2px",
            height: "40px",
            transform: "rotate(180deg)",
            background:
              "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)",
          }}
        ></Box>

        <img
          src={SearchIcon}
          alt=""
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </Flex>

      {/* Header right section */}
      <Flex alignItems="center" justifyContent="center" gap="20px">
        <Text
          css={{
            color: "$textPrimary",
            fontWeight: "600",
            fontSize: "$md",
          }}
        >
          Bessie Cooper
        </Text>

        <Flex
          justifyContent="center"
          css={{
            cursor: "pointer",
          }}
          alignItems="center"
          gap="15px"
        >
          <img
            src={Profile}
            alt=""
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <img
            src={DownArrow}
            alt=""
            style={{
              width: "10px",
              height: "10px",
            }}
          />
        </Flex>

        <Tooltip content="light/dark mode">
          <img
            src={Sun}
            alt=""
            style={{
              width: "14px",
              height: "14px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={handleModeChange}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Header;
