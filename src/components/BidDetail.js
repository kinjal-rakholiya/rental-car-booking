import React, { useContext } from 'react'
import { CarBookingContext } from '../contexts/CarBookingContext'

export default function BidDetail() {
  const { contact, bidAmount } = useContext(CarBookingContext)

  return (
    <div className="detail-container">
      <div className="detail">
        <div className="header">BID DETAILS</div>
        <div className="info">
          {contact} <br />
          Call me immediately to finalize
        </div>
      </div>
      <div className="amount-detail">
        <div className="price">${bidAmount}</div>
        <p className="content">Fixed Price</p>
      </div>
    </div>
  )
}
