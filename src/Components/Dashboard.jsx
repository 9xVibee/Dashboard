import { Box, Flex, Text, Calendar } from "@sparrowengg/twigs-react";
import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
} from "@sparrowengg/twigs-react";

import { CalendarIcon } from "./Icons";

import LeftArrow from "./../asset/leftArrow.svg";
import moonIconDashboard from "./../asset/moonSvgDemo.svg";
import Plus from "./../asset/plus.svg";
import plusLight from "./../asset/plusLight2.svg";
import AlertCircle from "./../asset/alert-circle.svg";
import AlertCircle2 from "./../asset/alert-circle2.svg";
import HorizontalDots from "./../asset/more-horizontal.svg";
import HorizontalDotsDark from "./../asset/more-horizontalDark.svg";

import { useState } from "react";
import AreaChartComp from "./AreaChart";
import PieBarContainer from "./PieBarContainer";
import { LightMode } from "../redux/light-dark/lightDarkTypes";
import { useSelector } from "react-redux";
import { parseDate } from "@internationalized/date";

const Dashboard = () => {
  const [value, setValue] = useState(parseDate("2023-07-24"));

  const mode = useSelector((store) => store.lightDarkMode);

  function FormattedDateFn() {
    const dateObj = new Date(value);

    const monthStr = dateObj.toLocaleString("default", { month: "long" });
    const yearNum = dateObj.getFullYear();

    return `${monthStr} ${yearNum}`;
  }

  return (
    <Flex
      css={{
        width: "1080px",
        height: "calc(100vh - 84px)",
        overflowY: "auto",
        backgroundColor: `$primary`,
        padding: "34px",
      }}
      flexDirection="column"
    >
      <Flex alignItems="center" gap="10px">
        <Text
          css={{
            color: "$purple",
            fontSize: "$sm",
            fontWeight: "700",
          }}
        >
          Dashboard
        </Text>
        <img
          src={LeftArrow}
          style={{
            height: "8px",
            width: "8px",
          }}
          alt=""
        />
        <Text
          css={{
            color: "$textSecondary",
            fontSize: "$sm",
            fontWeight: "500",
          }}
        >
          BITFOREX.COM
        </Text>
      </Flex>

      {/* Wubin design/logo section (heading) */}
      <Flex
        css={{
          marginTop: "20px",
        }}
        alignItems="center"
        gap="20px"
      >
        <img
          src={moonIconDashboard}
          alt=""
          style={{
            width: "45px",
            height: "45px",
          }}
        />

        <Text
          css={{
            fontSize: "$xl",
            lineHeight: "40px",
            fontWeight: "700",
            color: "$textPrimary",
          }}
        >
          wubin.design
        </Text>

        <Flex
          alignItems="center"
          justifyContent="center"
          css={{
            padding: "10px",
            backgroundColor: "$secondaryLight",
            borderRadius: "100%",
          }}
        >
          <img
            src={mode === LightMode ? Plus : plusLight}
            alt=""
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </Flex>
      </Flex>

      {/* Total visit seciton */}
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        css={{
          marginTop: "25px",
        }}
      >
        <Flex alignItems="center" gap="10px">
          <Text
            css={{
              fontSize: "$md",
              fontWeight: "700",
              color: "$textPrimary",
            }}
          >
            Total visit
          </Text>
          <img
            src={mode == LightMode ? AlertCircle : AlertCircle2}
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
        </Flex>

        <Flex alignItems="center" gap="30px">
          <Box
            css={{
              width: "61px",
              border: "2px solid $secondaryLight",
              borderRadius: "8px",
            }}
          ></Box>

          <Text
            css={{
              color: "$textSecondary",
              fontSize: "$xs",
              fontWeight: "700",
            }}
          >
            Provisions Month
          </Text>

          <Popover>
            <PopoverTrigger asChild>
              <Flex
                alignItems="center"
                gap="10px"
                css={{
                  border: "1px solid $border",
                  padding: "8px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <Text>{FormattedDateFn()}</Text>
                <CalendarIcon color={""} />
              </Flex>
            </PopoverTrigger>

            <PopoverContent
              css={{
                width: "auto",
              }}
            >
              <Calendar
                onChange={setValue}
                value={value}
                minValue={parseDate("2023-07-10")}
              />
              <PopoverArrow />
            </PopoverContent>
          </Popover>

          <Flex
            css={{
              padding: "8px",
              border: "1px solid $secondaryLight",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <img
              src={mode == LightMode ? HorizontalDots : HorizontalDotsDark}
              alt=""
              style={{
                width: "14px",
                height: "14px",
              }}
            />
          </Flex>
        </Flex>
      </Flex>

      <AreaChartComp />
      <PieBarContainer />
    </Flex>
  );
};

export default Dashboard;
