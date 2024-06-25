import React from 'react'

export default function PhoneWhiteNoIconBtnBlack({
  text = 'button',
  className = 'chb-h6',
}) {
  return (
    <>
      <button className={`PhoneWhiteNoIconBtnBlack ${className}`}>
        {text}
      </button>
      <style jsx>{`
        .PhoneWhiteNoIconBtnBlack {
          padding: 8px 16px;
          color: black;
          background-color: white;
          border: 1px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .PhoneWhiteNoIconBtnBlack:hover {
          border: 1px solid #685beb;
          color: #685beb;
        }
      `}</style>
    </>
  )
}
