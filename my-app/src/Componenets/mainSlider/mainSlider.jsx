import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const sliderItems = [
  {
    id: 1,
    title: "Fashion refresh",
    image: 'https://via.placeholder.com/600x400?text=Womens+Fashion',
    label: 'Women\'s Fashion',
  },
  {
    id: 2,
    title: "Fashion refresh",
    image: 'https://via.placeholder.com/600x400?text=Mens+Fashion',
    label: 'Men\'s Fashion',
  },
  {
    id: 3,
    title: "Summer Collection",
    image: 'https://via.placeholder.com/600x400?text=Summer+2024',
    label: 'New Arrivals',
  },
  {
    id: 4,
    title: "Tech Essentials",
    image: 'https://via.placeholder.com/600x400?text=Electronics',
    label: 'Electronics',
  },
];

const leftSlideImage = 'https://via.placeholder.com/600x400?text=GET+GAME+READY';

export default function MainSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
        bgcolor: '#f5f5f5',
        py: { xs: 1, sm: 2, md: 0 },
      }}
    >
      {/* Full Width Slider Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 0, sm: 1, md: 2 },
          px: { xs: 0, sm: 1, md: 2 },
          minHeight: { xs: '300px', sm: '350px', md: '400px' },
          overflow: 'hidden',
        }}
      >
        {/* Left Side - Static Image */}
        {!isMobile && (
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              flex: { sm: 0.4, md: 0.45 },
              height: { sm: '320px', md: '380px' },
              borderRadius: { sm: '8px', md: '12px' },
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src={leftSlideImage}
              alt="Left Slide"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
            <Typography
              sx={{
                position: 'absolute',
                bottom: { sm: '16px', md: '24px' },
                left: { sm: '16px', md: '24px' },
                color: 'white',
                fontWeight: 'bold',
                fontSize: { sm: '1.2rem', md: '1.5rem' },
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              GET GAME READY
            </Typography>
          </Box>
        )}

        {/* Right Side - Animated Slider */}
        <Box
          sx={{
            flex: { xs: 1, sm: 0.6, md: 0.55 },
            position: 'relative',
            height: { xs: '300px', sm: '320px', md: '380px' },
            borderRadius: { xs: '0', sm: '8px', md: '12px' },
            overflow: 'hidden',
          }}
        >
          {/* Slides Container */}
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              position: 'relative',
            }}
          >
            {sliderItems.map((item, index) => (
              <Box
                key={item.id}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: activeSlide === index ? 1 : 0,
                  transition: 'opacity 0.6s ease-in-out',
                  zIndex: activeSlide === index ? 1 : 0,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* Overlay Content */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    p: { xs: 2, sm: 3, md: 4 },
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                      mb: 1,
                      textAlign: 'right',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'white',
                      color: 'black',
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.5, sm: 0.8 },
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    }}
                  >
                    {item.label}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Navigation Arrows */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              justifyContent: 'space-between',
              px: { xs: 1, sm: 2 },
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                bgcolor: 'rgba(255,255,255,0.7)',
                color: 'black',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
                pointerEvents: 'all',
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                bgcolor: 'rgba(255,255,255,0.7)',
                color: 'black',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
                pointerEvents: 'all',
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          {/* Dots Navigation */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: '12px', sm: '16px', md: '20px' },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 10,
            }}
          >
            {sliderItems.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: activeSlide === index ? '24px' : '8px',
                  height: '8px',
                  bgcolor: activeSlide === index ? '#ffd814' : 'rgba(255,255,255,0.6)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: activeSlide === index ? '#ffd814' : 'rgba(255,255,255,0.9)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
