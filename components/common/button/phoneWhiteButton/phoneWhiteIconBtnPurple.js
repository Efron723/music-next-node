import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneWhiteIconBtnPurple({
  text = 'button',
  className = 'chb-h6',
  iconWidth = 36,
  iconHeight = 36,
  iconMarginRight = 8,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className={`PhoneWhiteIconBtnPurple ${className}`}>
        <IconComponent
          style={{
            marginRight: `${iconMarginRight}px`,
            width: `${iconWidth}px`,
            height: `${iconHeight}px`,
          }}
        />
        {text}
      </button>
      <style jsx>{`
        .PhoneWhiteIconBtnPurple {
          padding: 2px 12px 2px 8px;
          color: white;
          background-color: #685beb;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneWhiteIconBtnPurple:hover {
          background-color: #dbd7ff;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
