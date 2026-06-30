import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './items.css';
import item1 from '../../assets/Images/items-1.avif';
import item2 from '../../assets/Images/items-2.gif';
import item3 from '../../assets/Images/items-3.avif';
import item4 from '../../assets/Images/items-4.avif';
import item5 from '../../assets/Images/items-5.avif';
import item6 from '../../assets/Images/items-6.avif';
import item7 from '../../assets/Images/items-7.avif';
import item8 from '../../assets/Images/items-8.avif';
import item9 from '../../assets/Images/items-9.avif';
import item10 from '../../assets/Images/items-10.avif';
import item11 from '../../assets/Images/items-11.avif';
import item12 from '../../assets/Images/items-12.avif';
import item13 from '../../assets/Images/items-13.avif';
import item14 from '../../assets/Images/items-14.avif';
import item15 from '../../assets/Images/items-15.gif';
import item16 from '../../assets/Images/items-16.gif';
import item17 from '../../assets/Images/items-17.avif';
import item18 from '../../assets/Images/items-18.avif';
import item19 from '../../assets/Images/items-19.avif';
import item20 from '../../assets/Images/items-20.avif';

const itemCards = [
  { image: item1, },
  { image: item2, },
  { image: item3, },
  { image: item4, },
  { image: item5, },
  { image: item6, },
  { image: item7, },
  { image: item8, },
  { image: item9, },
  { image: item10,  },
  { image: item11,  },
  { image: item12,  },
  { image: item13,  },
  { image: item14,  },
  { image: item15,  },
  { image: item16,  },
  { image: item17,  },
  { image: item18, },
  { image: item19,  },
  { image: item20,  },
];

export default function Items() {
  const listRef = useRef(null);

  const handleScroll = (direction) => {
    if (!listRef.current) return;
    const cardWidth = listRef.current.firstChild?.getBoundingClientRect().width || 260;
    const scrollAmount = cardWidth + 16;
    listRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <Box className="items-section">
      <Box className="items-header">
        <Typography component="h2">Shop by category</Typography>
        <Box className="items-controls">
          <IconButton onClick={() => handleScroll('left')} aria-label="Previous">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={() => handleScroll('right')} aria-label="Next">
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      <Box className="items-carousel" ref={listRef}>
        {itemCards.map((item) => (
          <Box key={item.title} className="items-card">
            <img src={item.image} alt={item.title} />
            <Typography>{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
