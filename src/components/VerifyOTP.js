import React from 'react'
import JourneyDetail from './JourneyDetail'
import BidDetail from './BidDetail'
import OTPContainer from './OTPContainer'

/**
  This is the Third Step form for Rental Car Booking System
 */


export default function VerifyOTP() {
  return (
    <div className="container">
      <JourneyDetail />
      <hr />
      <BidDetail />
      <hr />
      <OTPContainer />
    </div>
  )
}
