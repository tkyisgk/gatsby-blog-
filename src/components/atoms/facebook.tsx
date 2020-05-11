import React from "react"

interface FacebookProps {
  iconColor: string,
  bgColor: string
}

const Facebook: React.FC<FacebookProps> = ({ iconColor = `#fff`, bgColor = `#000` }) => (

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 195.1">
    <g>
      <path fill={bgColor} d="M195,97.5A97.5,97.5,0,1,0,82.3,193.8V125.6H57.4V97.4H82.3V75.9c0-24.4,14.5-38,36.7-38A133.34,133.34,0,0,1,140.7,40V63.8H128.5c-12.1,0-16,7.6-16,15.3V97.4h27.1l-4.3,28.2H112.6v68.2A97.51,97.51,0,0,0,195,97.5" />
      <path fill={iconColor} d="M135.4,125.7l4.3-28.2H112.6V79.2c0-7.7,3.9-15.3,16-15.3h12.2V40.1A135,135,0,0,0,119.1,38C96.8,38,82.4,51.6,82.4,76V97.5H57.5v28.2H82.4v68.2a96.87,96.87,0,0,0,30.4,0V125.7Z" />
    </g>
  </svg>

)

export default Facebook
