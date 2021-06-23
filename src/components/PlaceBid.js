import React from 'react'
import JourneyDetail from './JourneyDetail'
import BidRate from './BidRate'

/**
  This is the second Step for Rental Car Booking System
*/

export default function PlaceBid() {
  return (
    <div className="container">
      <JourneyDetail />
      <hr />
      <BidRate />
    </div>
  )
}
