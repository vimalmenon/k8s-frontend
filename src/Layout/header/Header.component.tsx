import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export const Header: React.FC = () => {
  return (
    <AppBar position="absolute" >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 800,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          K8S App
        </Typography>
      </Toolbar>
    </AppBar>

  );
}
