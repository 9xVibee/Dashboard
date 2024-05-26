import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Superiority from "./Superiority";
import { Flex } from "@sparrowengg/twigs-react";

const Home = () => {
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
          <Dashboard />
          <Superiority />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
