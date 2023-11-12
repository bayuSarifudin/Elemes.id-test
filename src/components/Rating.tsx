import React from 'react';
import Star from '@/assets/icons/Star';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  if (rating > 5) {
    return (
      <div className='flex flex-row items-center justify-center w-fit gap-1'>
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <Star fill='#FF8412' key={index} />
          )
        })}
      </div>
    )
  } else if (rating <= 0) {
    return (
      <div className='flex flex-row items-center justify-center w-fit gap-1'>
        {Array.from({ length: 1 }).map((_, index) => {
          return (
            <Star fill='#FF8412' key={index} />
          )
        })}
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Star key={index} />
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='flex flex-row items-center justify-center w-fit gap-1'>
        {Array.from({ length: rating }).map((_, index) => {
          return (
            <Star fill='#FF8412' key={index} />
          )
        })}
        {Array.from({ length: 5 - rating }).map((_, index) => {
          return (
            <Star key={index} />
          )
        })}
      </div>
    )
  }
};

export default StarRating;
