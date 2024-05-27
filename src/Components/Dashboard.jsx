import { Box, Flex, Text } from "@sparrowengg/twigs-react";

import CalenderIcon from "./../asset/calendar.svg";
import LeftArrow from "./../asset/leftArrow.svg";
import moonIconDashboard from "./../asset/moonSvgDemo.svg";
import Plus from "./../asset/plus.svg";
import AlertCircle from "./../asset/alert-circle.svg";
import HorizontalDots from "./../asset/more-horizontal.svg";

import { useEffect, useRef, useState } from "react";
import AreaChartComp from "./AreaChart";
import PieChartComp from "./PieChartComp";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const dateInputRef = useRef(null);

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const options = { month: "long", year: "numeric" };
    const formatted = date.toLocaleDateString("en-US", options);
    setSelectedDate(event.target.value);

    const arr = formatted.split(" ");
    setFormattedDate(
      (arr[0].length > 3 ? arr[0].substring(0, 3) : arr[0]) + " " + arr[1]
    );
  };

  useEffect(() => {
    const date = new Date();
    const options = { month: "long", year: "numeric" };
    const formatted = date.toLocaleDateString("en-US", options);
    setSelectedDate(date);

    setFormattedDate(formatted);
  }, []);

  return (
    <Flex
      css={{
        width: "1080px",
        height: "100%",
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
          }}
        >
          wubin.design
        </Text>

        <Flex
          alignItems="center"
          justifyContent="center"
          css={{
            padding: "10px",
            backgroundColor: "$secondary",
            borderRadius: "100%",
          }}
        >
          <img
            src={Plus}
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
            src={AlertCircle}
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
              border: "2px solid #ECE9F1",
              borderRadius: "5px",
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

          <Flex
            alignItems="center"
            css={{
              position: "relative",
              width: "134px",
              height: "30px",
              border: "1px solid $border",
              borderRadius: "5px",
            }}
          >
            <Flex
              css={{
                position: "absolute",
                backgroundColor: "$primary",
                pointerEvents: "none",
                padding: "4px 10px",
                width: "100%",
              }}
              gap="15px"
              justifyContent="space-between"
            >
              <Text
                css={{
                  fontSize: "$sm",
                }}
              >
                {formattedDate}
              </Text>
              <img
                src={CalenderIcon}
                alt=""
                style={{
                  width: "14px",
                  height: "14px",
                  cursor: "pointer",
                }}
              />
            </Flex>
            <input
              type="date"
              id="hidden-date-input"
              value={selectedDate}
              onChange={handleDateChange}
              ref={dateInputRef}
              style={{
                width: "126px",
                height: "20px",
              }}
            />
          </Flex>

          <Flex
            css={{
              padding: "8px",
              border: "1px solid $border",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <img
              src={HorizontalDots}
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
      <PieChartComp />
    </Flex>
  );
};

export default Dashboard;
