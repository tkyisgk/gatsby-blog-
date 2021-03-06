import * as React from "react"

type LogoProps = {
  siteTitle: string,
  color?: string
}

const Logo: React.FC<LogoProps> = ({ siteTitle, color = `#000` }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.12 8.59">
    <title>{siteTitle}</title>
    <g fill={color}>
      <path d="M0,0H2.52l.91,4.81L4.76,0H7.27L8.6,4.8,9.51,0H12l-1.9,8.59H7.52L6,3.18,4.51,8.59H1.91Z" />
      <path d="M12.88,0H20V1.83H15.54V3.2h4.13V5H15.54V6.64h4.58v2H12.88Z" />
      <path d="M21.56,0h5a2.7,2.7,0,0,1,1.9.62,2,2,0,0,1,.67,1.52,1.93,1.93,0,0,1-.48,1.31A2.13,2.13,0,0,1,27.7,4a2.43,2.43,0,0,1,1.36.76,2.14,2.14,0,0,1,.44,1.37,2.44,2.44,0,0,1-.31,1.2,2.36,2.36,0,0,1-.85.84,2.87,2.87,0,0,1-1,.28,11.56,11.56,0,0,1-1.19.12H21.56Zm2.67,3.37h1.16a1.33,1.33,0,0,0,.86-.21.77.77,0,0,0,.25-.62A.72.72,0,0,0,26.25,2a1.29,1.29,0,0,0-.84-.21H24.23Zm0,3.37h1.36a1.48,1.48,0,0,0,1-.24.81.81,0,0,0,.29-.65.76.76,0,0,0-.28-.61,1.53,1.53,0,0,0-1-.24H24.23Z" />
      <path d="M40.17,7.17h-3l-.41,1.42H34L37.25,0h2.9l3.23,8.59H40.6Zm-.55-1.86-.95-3.08-.94,3.08Z" />
      <path d="M44.24,0h2.48L50,4.75V0h2.5V8.59H50L46.73,3.87V8.59H44.24Z" />
      <path d="M54.25,0h4a4.74,4.74,0,0,1,1.88.32,3.14,3.14,0,0,1,1.19.9A4,4,0,0,1,62,2.6a6.42,6.42,0,0,1,.21,1.67,5.71,5.71,0,0,1-.32,2.13A3.5,3.5,0,0,1,61,7.67a3,3,0,0,1-1.19.69,6.41,6.41,0,0,1-1.58.23h-4Zm2.66,2V6.64h.65a2.6,2.6,0,0,0,1.18-.19,1.22,1.22,0,0,0,.55-.64,4.1,4.1,0,0,0,.2-1.49A2.88,2.88,0,0,0,59,2.45,1.84,1.84,0,0,0,57.57,2Z" />
      <path d="M67.52,0H71l1.35,5.23L73.7,0h3.49V8.59H75V2L73.34,8.59h-2L69.7,2V8.59H67.52Z" />
      <path d="M78.87,0H86V1.83H81.53V3.2h4.13V5H81.53V6.64h4.59v2H78.87Z" />
    </g>
  </svg>
)

export default Logo
