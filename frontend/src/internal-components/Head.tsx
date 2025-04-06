import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet-async';
import fonts from "../fonts.json";

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const Head: React.FC<HeadProps> = ({ 
  title = 'Default Title',
  description = 'Default description',
  keywords = 'default, keywords'
}) => {
  return (
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {fonts.map((font) => (
        <link key={font} href={font} rel="stylesheet" />
      ))}
    </ReactHelmet>
  );
};

export default Head;
