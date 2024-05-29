import { useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Superiority from "./Superiority";
import { Flex } from "@sparrowengg/twigs-react";
import FetchData from "../hooks/FetchData";
import { useDispatch } from "react-redux";
import { SetData } from "../redux/fake-api-data/fakeApiDataTypes";
import { Outlet, createBrowserRouter } from "react-router-dom";
import AdvanceQuarry from "../pages/AdvanceQuarry";
import Events from "../pages/Events";

const HomeLayout = () => {
  const { fetchDataFn } = FetchData();
  const dispatch = useDispatch();

  const getData = async () => {
    let data = await fetchDataFn();
    dispatch({
      type: SetData,
      data: data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex
      css={{
        height: "100vh",
        backgroundColor: "$secondary",
        width: "100%",
      }}
      gap="2px"
    >
      <Sidebar />
      <Flex
        flexDirection="column"
        css={{
          width: "100%",
        }}
        gap="2px"
      >
        <Header />
        <Flex
          gap="2px"
          css={{
            height: "100%",
          }}
        >
          <Outlet />
          <Superiority />
        </Flex>
      </Flex>
    </Flex>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/advancequarry",
        element: <AdvanceQuarry />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);

export default router;
