import {
  Flex,
  Drawer,
  Box,
  DrawerBody,
  Tooltip,
} from "@sparrowengg/twigs-react";

import MenuIcon from "./../asset/menu.svg";
import SideBarIcon1 from "./../asset/sidebarImg1.svg";
import SideBarIcon2 from "./../asset/sidebarImg2.svg";
import SideBarIcon3 from "./../asset/sidebarImg3.svg";
import MessageIcon from "./../asset/message-square.svg";

import Icon1 from "./../asset/icon1.svg";
import Icon2 from "./../asset/icon2.svg";
import Icon3 from "./../asset/icon3.svg";
import Icon4 from "./../asset/icon4.svg";
import Icon5 from "./../asset/icon5.svg";

import { useState } from "react";

const imgArr = [SideBarIcon1, SideBarIcon2, SideBarIcon3];
const IconArr = [Icon1, Icon2, Icon3, Icon4, Icon5];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              cursor: "pointer",
            }}
            onClick={() => {
              setIsOpen(true);
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
              width: "40px",
              background:
                "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)",
              height: "2px",
              marginTop: "2px",
              marginBottom: "13px",
            }}
          ></Box>

          {imgArr.map((url, idx) => {
            return (
              <img
                src={url}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "13px 0",
                  cursor: "pointer",
                }}
                key={idx}
                alt=""
              />
            );
          })}

          <Box
            css={{
              width: "40px",
              margin: "10px",
              background:
                "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)",
              height: "2px",
            }}
          ></Box>

          {/* Icons */}
          <Flex
            flexDirection="column"
            alignItems="center"
            css={{
              padding: "2px",
              backgroundColor: "$secondary",
              borderRadius: "15px",
              marginTop: "13px",
            }}
            gap="8px"
          >
            {IconArr.map((icon, idx) => {
              return (
                <Flex
                  key={idx}
                  css={{
                    backgroundColor: idx === 0 ? "$primary" : "",
                    borderRadius: "15px",
                    width: "40px",
                    height: "40px",
                    boxShadow: idx === 0 ? "0px 4px 4px 0px #00000014" : "",
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: "14px",
                      height: "14px",
                    }}
                  />
                </Flex>
              );
            })}
          </Flex>
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
          <Tooltip content="Message">
            <Flex
              css={{
                height: "44px",
                width: "44px",
                margin: "13px 0",
                borderRadius: "15px",
                backgroundColor: "$secondary",
                cursor: "pointer",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img src={MessageIcon} alt="" />
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerBody>Hellow from abhay to Febin!</DrawerBody>
      </Drawer>
    </>
  );
};

export default Sidebar;
