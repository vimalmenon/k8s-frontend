import { Header } from "./header";
import { Footer } from "./footer";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export const Layout: React.FC<any> = ({ children }) => {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', flexDirection: "column", height: "100vh" }}>
        <CssBaseline />
        <Header />
        <Box sx={{ height: "65px", background: "orange" }} />
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Container maxWidth="lg" sx={{ marginTop: "2em" }}>
            <section>{children}</section>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
