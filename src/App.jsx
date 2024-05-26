import { ThemeProvider } from "@sparrowengg/twigs-react";
import Home from "./Components/Home";
import theme from "./../twings.config";
import { useSelector } from "react-redux";

const App = () => {
  const mode = useSelector((store) => store.lightDarkMode);

  return (
    <ThemeProvider theme={theme.theme[mode]}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
