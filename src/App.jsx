import { ThemeProvider } from "@sparrowengg/twigs-react";
import Home from "./Components/Home";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
