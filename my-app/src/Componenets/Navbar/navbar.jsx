import './navbar.css';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  color: 'black',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: '500px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '300px',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '200px',
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#999',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: '0.95rem',
    '&::placeholder': {
      opacity: 0.7,
      color: '#999',
    },
  },
}));

export default function ResponsiveNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [languageAnchor, setLanguageAnchor] = React.useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isLanguageOpen = Boolean(languageAnchor);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchor(null);
  };

  const handleMobileDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const menuId = 'profile-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const languageMenuId = 'language-menu';
  const renderLanguageMenu = (
    <Menu
      anchorEl={languageAnchor}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={languageMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isLanguageOpen}
      onClose={handleLanguageMenuClose}
    >
      <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
      <MenuItem onClick={handleLanguageMenuClose}>العربية (Arabic)</MenuItem>
    </Menu>
  );

  const mobileDrawerContent = (
    <Box
      sx={{
        width: 280,
        pt: 2,
        px: 2,
      }}
      role="presentation"
      onClick={handleMobileDrawerToggle}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Menu
        </Typography>
        <IconButton onClick={handleMobileDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem button>
          <LocationOnIcon sx={{ mr: 1 }} />
          <ListItemText primary="Other - Dubai" />
        </ListItem>
        <ListItem button>
          <LoginIcon sx={{ mr: 1 }} />
          <ListItemText primary="Log in" />
        </ListItem>
        <ListItem button>
          <ShoppingBagIcon sx={{ mr: 1 }} />
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <FavoriteBorderIcon sx={{ mr: 1 }} />
          <ListItemText primary="Wishlist" />
        </ListItem>
        <ListItem button>
          <ShoppingCartIcon sx={{ mr: 1 }} />
          <ListItemText primary="Cart" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#ffd814',
          color: '#000',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 1, sm: 2, md: 3 },
            gap: { xs: 0.5, sm: 1, md: 2 },
          }}
        >
          {/* Logo - Desktop */}
          <Typography
            variant="h5"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'bold',
              mr: { sm: 1, md: 2 },
              minWidth: 'fit-content',
            }}
          >
            noon
          </Typography>

          {/* Search Bar - Responsive */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#999'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are you looking for?"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }} />

          {/* Desktop Navigation - Hidden on mobile */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { md: 0.5, lg: 1 },
              minWidth: 'fit-content',
            }}
          >
            {/* Location */}
            <IconButton
              size="small"
              sx={{
                color: '#000',
                flexDirection: 'column',
                fontSize: '0.7rem',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
              }}
              title="Location"
            >
              <LocationOnIcon sx={{ fontSize: '1.3rem' }} />
              <Typography sx={{ fontSize: '0.65rem', mt: 0.25 }}>Other</Typography>
            </IconButton>

            {/* Language */}
            <IconButton
              size="small"
              onClick={handleLanguageMenuOpen}
              sx={{
                color: '#000',
                flexDirection: 'column',
                fontSize: '0.7rem',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
              }}
              title="Language"
            >
              <LanguageIcon sx={{ fontSize: '1.3rem' }} />
              <Typography sx={{ fontSize: '0.65rem', mt: 0.25 }}>عربية</Typography>
            </IconButton>

            {/* Log in */}
            <IconButton
              size="small"
              sx={{
                color: '#000',
                flexDirection: 'column',
                fontSize: '0.7rem',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
              }}
              title="Log in"
            >
              <LoginIcon sx={{ fontSize: '1.3rem' }} />
              <Typography sx={{ fontSize: '0.65rem', mt: 0.25 }}>Log in</Typography>
            </IconButton>

            {/* Orders */}
            <IconButton
              size="small"
              sx={{
                color: '#000',
                flexDirection: 'column',
                fontSize: '0.7rem',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
              }}
              title="Orders"
            >
              <ShoppingBagIcon sx={{ fontSize: '1.3rem' }} />
              <Typography sx={{ fontSize: '0.65rem', mt: 0.25 }}>Orders</Typography>
            </IconButton>

            {/* Wishlist */}
            <IconButton
              size="small"
              sx={{
                color: '#000',
                flexDirection: 'column',
                fontSize: '0.7rem',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
              }}
              title="Wishlist"
            >
              <FavoriteBorderIcon sx={{ fontSize: '1.3rem' }} />
              <Typography sx={{ fontSize: '0.65rem', mt: 0.25 }}>Wishlist</Typography>
            </IconButton>

            {/* Cart */}
            <IconButton
              size="small"
              sx={{
                color: '#000',
                flexDirection: 'column',
                fontSize: '0.7rem',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
              }}
              title="Cart"
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon sx={{ fontSize: '1.3rem' }} />
              </Badge>
              <Typography sx={{ fontSize: '0.65rem', mt: 0.25 }}>Cart</Typography>
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMobileDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileDrawerOpen}
        onClose={handleMobileDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {mobileDrawerContent}
      </Drawer>

      {/* Menus */}
      {renderMenu}
      {renderLanguageMenu}
    </Box>
  );
}
