import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AccountCircle } from '@mui/icons-material';

const ToolBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: '#263238'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h3" to="/" component={NavLink} sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', fontStyle: 'italic', padding: '20px 0', '&.active': {fontSize: '25px', fontWeight: 'bold'}}}>
              Calorie tracker
            </Typography>
            <IconButton color="inherit" sx={{marginLeft: '20px'}}>
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default ToolBar;