import React, { useState } from 'react'
import { CarBookingContext } from './CarBookingContext'
import { stepDescriptions } from '../utils/constant'

export default function CarBookingContextProvider(props) {
  // Manage Steps Number
  const [stepNo, setStepNo] = useState(1)
  const [stepDescription, setStepDescription] = useState(stepDescriptions[1])

  //Step1 Form Elements
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [carType, setCarType] = useState('HatchBack')
  const [person, setPerson] = useState(1)

  //bid detail
  const [bidAmount, setBidAmount] = useState('')
  const [contact, setContact] = useState('')
  const [rateNegotiable, setRateNegotiable] = useState(false)
  const [getUpdate, setGetUpdate] = useState(false)

  const carBookingContext = {
    stepNo,
    setStepNo,
    stepDescription,
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
  }
  return (
    <CarBookingContext.Provider value={carBookingContext}>
      {props.children}
    </CarBookingContext.Provider>
  )
}
