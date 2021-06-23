import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import JourneyDetail from './JourneyDetail'
import BidDetail from './BidDetail'
import { CarBookingContext } from '../contexts/CarBookingContext'
import { stepDescriptions } from '../utils/constant'

/**
  This is the Last Step for Rental Car Booking System
 */


export default function SubmitForm() {
  const {
    setStepNo,
    setStepDescription,
    source,
    setSource,
    destination,
    setDestination,
    setCarType,
    carType,
    person,
    setPerson,
    bidAmount,
    setBidAmount,
    contact,
    setContact,
    rateNegotiable,
    setRateNegotiable,
    getUpdate,
    setGetUpdate,
  } = useContext(CarBookingContext);

  const valuesToBeSubmitted = {
    source,
    destination,
    carType,
    person,
    bidAmount,
    contact,
    rateNegotiable,
    getUpdate,
  }
  return (
    <>
      <div className="container">
        <JourneyDetail />
        <hr />
        <BidDetail />
        <hr />
      </div>
      <Formik
      initialValues={valuesToBeSubmitted}
        onSubmit={() => {
          console.log(`Submit these values: ${JSON.stringify(valuesToBeSubmitted)} \n`)
          console.log('Resetting the form values and redirecting to first step')
          alert('Your form has been submitted!')
          setSource('')
          setDestination('')
          setCarType('HatchBack')
          setPerson(1)
          setBidAmount('')
          setContact('')
          setRateNegotiable(false)
          setGetUpdate(false)
          setStepNo(1)
          setStepDescription(stepDescriptions[1])
        }}
      >
        {(formik) => {
          return (
            <Form className="form-container">
              <button type="Submit Bid">Enter Bid Details</button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
