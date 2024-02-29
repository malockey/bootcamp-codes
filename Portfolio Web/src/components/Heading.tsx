import React from 'react'

interface HeadingProps {
  title: string;
  img: string;
  alt: string;
  isClickable?: boolean;
}

export function Heading ({ title, img, alt, isClickable }: HeadingProps) {
  const headingStyle: React.CSSProperties = {
    cursor: isClickable ? 'pointer' : 'auto'
  }

  return (
    <li style={headingStyle}>
      <img src={img} alt={alt} width={10} height={10} />
      <p>{title}</p>
    </li>
  )
}
