import React from 'react'
import { BsPlus } from 'react-icons/bs'

export default function PhoneBlackIconBtnBlack({
  text = 'button',
  className = 'chb-h6',
  iconWidth = 36,
  iconHeight = 36,
  iconMarginRight = 8,
  icon: IconComponent = BsPlus,
}) {
  return (
    <>
      <button className={`PhoneBlackIconBtnBlack ${className}`}>
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
        .PhoneBlackIconBtnBlack {
          padding: 2px 12px 2px 8px;
          color: white;
          background-color: black;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneBlackIconBtnBlack:hover {
          background-color: white;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
