import { Button, Flex, Text } from "@sparrowengg/twigs-react";
import { useDispatch, useSelector } from "react-redux";
import { DarkMode, LightMode } from "../redux/light-dark/lightDarkTypes";

const Header = () => {
  const mode = useSelector((state) => state.lightDarkMode);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    console.log("Clicked!", mode);

    dispatch({
      type: mode == LightMode ? DarkMode : LightMode,
    });
  };

  return (
    <Flex
      css={{
        height: "82px",
      }}
    >
      <Text
        css={{
          color: "$textPrimary",
        }}
      >
        Hellow World!
        <Button onClick={handleChangeMode}>Change Theme</Button>
      </Text>
    </Flex>
  );
};

export default Header;
