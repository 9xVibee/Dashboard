import { Box, Flex } from "@sparrowengg/twigs-react";
import MenuIcon from "./../asset/menu.svg";
import SideBarIcon1 from "./../asset/sidebarImg1.svg";
import SideBarIcon2 from "./../asset/sidebarImg2.svg";
import SideBarIcon3 from "./../asset/sidebarImg3.svg";
import MessageIcon from "./../asset/message-square.svg";

const Sidebar = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      css={{
        height: "100%",
        width: "80px",
        backgroundColor: "$primary",
      }}
    >
      {/* upper container */}
      <Flex flexDirection="column" alignItems="center">
        <Flex
          justifyContent="center"
          alignItems="center"
          css={{
            padding: "30px",
          }}
        >
          <img
            src={MenuIcon}
            alt=""
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </Flex>

        <Box
          css={{
            margin: "10px",
            width: "100%",
          }}
        ></Box>

        <img
          src={SideBarIcon1}
          style={{
            width: "40px",
            height: "40px",
            margin: "13px 0",
          }}
          alt=""
        />

        <img
          src={SideBarIcon2}
          style={{
            width: "40px",
            height: "40px",
            margin: "13px 0",
          }}
          alt=""
        />

        <img
          src={SideBarIcon3}
          style={{
            width: "40px",
            height: "40px",
            margin: "13px 0",
          }}
          alt=""
        />

        <Box
          css={{
            height: "13px",
            width: "100%",
          }}
        ></Box>
      </Flex>

      {/* lower container */}
      <Flex
        justifyContent="center"
        css={{
          width: "100%",
        }}
        alignItems="center"
        flexDirection="column"
      >
        <Box
          css={{
            margin: "10px 0",
            width: "100%",
          }}
        ></Box>
        <Flex
          css={{
            height: "44px",
            width: "44px",
            margin: "13px 0",
            borderRadius: "15px",
            backgroundColor: "$secondary",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <img src={MessageIcon} alt="" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
