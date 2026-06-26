import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './ManuNavbar.css';

const categories = [
  'Electronics',
  'Beauty & Fragrance',
  'Home & Kitchen',
  'Grocery',
  "Men's Fashion",
  "Women's Fashion",
  'Baby',
  'Toys',
  "Kids' Fashion",
  'Sports & Outdoors',
  'Health & Nutrition',
];

export default function ManuNavbar() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component="nav" className="manu-navbar">
      <Box className="manu-navbar-inner">
        <Box className="manu-navbar-tabs-wrapper">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={isSm ? false : 'auto'}
            allowScrollButtonsMobile
            aria-label="category tabs"
            className="manu-navbar-tabs"
          >
            {categories.map((label, idx) => (
              <Tab
                key={label}
                label={label}
                value={idx}
                wrapped
                className="manu-navbar-tab"
              />
            ))}
          </Tabs>
        </Box>

        <Box className="manu-navbar-action">
          <Button variant="contained" disableElevation className="manu-navbar-button">
            <Box component="span" className="manu-navbar-button-label">
              Get Free Delivery with
            </Box>
            <Box component="span" className="manu-navbar-button-pill">
              noon one
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
