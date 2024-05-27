import {
  ThemeProvider,
  TooltipProvider,
  createTheme,
} from "@sparrowengg/twigs-react";
import Home from "./Components/Home";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import theme from "./../twings.config";

const App = () => {
  const mode = useSelector((store) => store.lightDarkMode);
  const strRef = useRef("");

  useEffect(() => {
    if (strRef.current)
      document.documentElement.classList.remove(strRef.current);

    strRef.current = createTheme(theme.theme[mode]);
    document.documentElement.classList.add(strRef.current);
  }, [mode]);

  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={0}>
        <Home />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
