import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import heroImage from '../../assets/Images/Fashion refresh.avif';
import './mainSlider.css';
import sliderImage1 from '../../assets/Images/main-slider-1.avif';
import sliderImage2 from '../../assets/Images/main-slider-2.avif';
import sliderImage3 from '../../assets/Images/main-slider-3.avif';
import sliderImage4 from '../../assets/Images/main-slider-4.avif';
import sliderImage5 from '../../assets/Images/main-slider-5.avif';
// import sliderImage6 from '../../assets/Images/main-slider-6.avif';



const sliderItems = [
  {
    id: 1,
    // title: 'Fashion refresh',
    image: sliderImage1,
    label: 'Women’s Fashion',
  },
  {
    id: 2,
    // title: 'Fashion refresh',
    image: sliderImage2,
    label: 'Men’s Fashion',
  },
  {
    id: 3,
    // title: 'Summer savings',
    image: sliderImage3,
    label: 'New Arrivals',
  },
  {
    id: 4,
    // title: 'Tech essentials',
    image: sliderImage4,
    label: 'Electronics',
  }, {
    id: 5,
    // title: 'Tech essentials',
    image: sliderImage5,
    label: 'Electronics',
  }, 
];

export default function MainSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setActiveSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setActiveSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const handleDotClick = (index) => {
    setAutoPlay(false);
    setActiveSlide(index);
  };

  return (
    <Box
      sx={{
        width: '100%',
        // maxWidth: '1400px',
        // minHeight: { xs: '180px', md: '220px' },
        bgcolor: '#f5f5f5',
        py: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1480px',
          mx: 'auto',
          px: { xs: 1.5, sm: 2, md: 3 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          // gap: { xs: 2, md: 2.5 },
          alignItems: 'stretch',
          minHeight: '250px', // change this value if you want a different total slider height
        }}
      >
        {/* Left Side: Slider */}
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '0 0 58%' },
            minHeight: '250px', // change this value if you want a different left slider height
            // borderRadius: { xs: '14px', md: '20px' },
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 18px 60px rgba(0,0,0,0.12)',
            bgcolor: '#000',
          }}
        >
          {sliderItems.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                position: 'absolute',
                inset: 0,
                opacity: activeSlide === index ? 1 : 0,
                transition: 'opacity 0.7s ease',
                zIndex: activeSlide === index ? 1 : 0,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.48) 58%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: { xs: '2rem', md: '2.7rem' },
                    lineHeight: 1.05,
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      bgcolor: '#fff',
                      borderRadius: '999px',
                      color: '#111',
                      fontWeight: 700,
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                    }}
                  >
                    {item.label}
                  </Box>
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      bgcolor: 'rgba(255,255,255,0.18)',
                      borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.35)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: { xs: '0.8rem', md: '0.9rem' },
                    }}
                  >
                    Shop now
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 1.5, sm: 2 },
              pointerEvents: 'none',
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                pointerEvents: 'all',
                bgcolor: 'rgba(255,255,255,0.85)',
                color: '#111',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.98)' },
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                pointerEvents: 'all',
                bgcolor: 'rgba(255,255,255,0.85)',
                color: '#111',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.98)' },
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 16, md: 20 },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              pointerEvents: 'all',
            }}
          >
            {sliderItems.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: activeSlide === index ? 24 : 8,
                  height: 2,
                  bgcolor: activeSlide === index ? '#ffd814' : 'rgba(255,255,255,0.55)',
                  // borderRadius: 999,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Right Side: Hero Image */}
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '0 0 40%' },
            minHeight: '250px', // change this value if you want a different right image height
            // borderRadius: { xs: '14px', md: '20px' },
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 18px 60px rgba(0,0,0,0.12)',
          }}
        >
          <img
            src={heroImage}
            alt="Fashion refresh"
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.35))',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              right: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontWeight: 900,
                fontSize: { xs: '1.7rem', md: '2.6rem' },
                lineHeight: 1.05,
              }}
            >
              {/* Fashion refresh */}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  bgcolor: 'rgba(255,255,255,0.95)',
                  borderRadius: '999px',
                  color: '#111',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                Women’s Fashion
              </Box>
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  bgcolor: 'rgba(255,255,255,0.95)',
                  borderRadius: '999px',
                  color: '#111',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                Men’s Fashion
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
