import Catalog from "../../features/catalog/Catalog";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";


function App() {
  const [darkmode, setDarkMode] = useState(false);
  const paletteType = darkmode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkmode)
  }


  return (
    <ThemeProvider theme={theme} >
      <Header darkMode={darkmode} handleThemeChange={handleThemeChange}></Header>
      <Container>
        <Outlet />
      </Container>

    </ThemeProvider>

  );
}

export default App;



