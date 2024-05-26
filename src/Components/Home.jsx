import Sidebar from "./Sidebar";
// import Header from "./Header";
// import Dashboard from "./Dashboard";
// import Superiority from "./Superiority";
import { Flex } from "@sparrowengg/twigs-react";

const Home = () => {
  return (
    <Flex
      css={{
        height: "100vh",
        backgroundColor: "$secondary",
      }}
    >
      <Sidebar />
      <Flex flexDirection="column">
        {/* <Header /> */}
        <Flex>
          {/* <Dashboard /> */}
          {/* <Superiority /> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
