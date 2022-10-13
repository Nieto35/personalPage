import React from "react";
import ResponsiveAppBar from "@components/NavBar";
import useDarkMode from "@hooks/useDarkMode";
import Switch from "@mui/material/Switch";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode);

  return (
    <>
      <Switch onChange={() => setDarkMode(!darkMode)} />
      {/* <ResponsiveAppBar /> */}
    </>
  );
};

export default App;
