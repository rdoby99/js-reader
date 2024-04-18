import React from 'react';

interface BannerProps {
  text: string;
  hier: string;
}

const Banner: React.FC<BannerProps> = ({ text, hier }) => {
  const Tag = hier as keyof JSX.IntrinsicElements;
  return <Tag>{text}</Tag>;
};

export default Banner;