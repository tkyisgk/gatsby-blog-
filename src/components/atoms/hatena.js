import PropTypes from "prop-types"
import React from "react"

const Hatena = ({ iconColor, bgColor }) => (

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <rect width="500" height="500" rx="101.9" ry="101.9" fill={bgColor} />
    <g fill={iconColor}>
      <path d="M278.2,258.1q-13.6-15.2-37.8-17c14.4-3.9,24.8-9.6,31.4-17.3s9.8-17.8,9.8-30.7A55,55,0,0,0,275,166a48.8,48.8,0,0,0-19.2-18.6c-7.3-4-16-6.9-26.2-8.6s-28.1-2.4-53.7-2.4H113.6V363.6h64.2q38.7,0,55.8-2.6c11.4-1.8,20.9-4.8,28.6-8.9a52.5,52.5,0,0,0,21.9-21.4c5.1-9.2,7.7-19.9,7.7-32.1C291.8,281.7,287.3,268.2,278.2,258.1Zm-107-71.4h13.3q23.1,0,31,5.2c5.3,3.5,7.9,9.5,7.9,18s-2.9,14-8.5,17.4-16.1,5-31.4,5H171.2V186.7Zm52.8,130.3c-6.1,3.7-16.5,5.5-31.1,5.5H171.2V273h22.6c15,0,25.4,1.9,30.9,5.7s8.4,10.4,8.4,20S230.1,313.4,223.9,317.1Z" />
      <path d="M357.6,306.1a28.8,28.8,0,1,0,28.8,28.8A28.8,28.8,0,0,0,357.6,306.1Z" />
      <rect x="332.6" y="136.4" width="50" height="151.52" />
    </g>
  </svg>

)

Hatena.propTypes = {
  iconColor: PropTypes.string,
  bgColor: PropTypes.string
}

Hatena.defaultProps = {
  iconColor: `#fff`,
  bgColor: `#00a4de`
}

export default Hatena
