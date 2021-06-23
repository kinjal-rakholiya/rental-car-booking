import React, { useContext } from 'react'
import { CarBookingContext } from '../contexts/CarBookingContext'
import { stepDescriptions } from '../utils/constant'

export default function JourneyDetail() {
  const {
    source,
    destination,
    carType,
    person,
    setStepNo,
    setStepDescription,
  } = useContext(CarBookingContext)

  //On Edit click, it should open previous form
  function clickHandler() {
    setStepNo(1)
    setStepDescription(stepDescriptions[1])
  }

  return (
    <div className="detail-container">
      <div className="detail">
        <div className="header">JOURNEY DETAIL</div>
        <div className="info">
          {source} - {destination}
        </div>
        <div className="info">
          {person} Persons, {carType}
        </div>
      </div>
      <button className="edit-btn" onClick={clickHandler}>
        <span>
          <i className="fa fa-pencil"> Edit</i>
        </span>
      </button>
    </div>
  )
}
