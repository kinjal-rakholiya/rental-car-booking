import React, { useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { CarBookingContext } from '../contexts/CarBookingContext'
import { stepDescriptions } from '../utils/constant'

import './JourneyForm.css'

/**
  This is the First Step form for Rental Car Booking System
*/

const JourneyForm = () => {
  const {
    source,
    destination,
    carType,
    person,
    setSource,
    setDestination,
    setCarType,
    setPerson,
    setStepNo,
    setStepDescription,
  } = useContext(CarBookingContext)

  const initialValues = {
    source,
    destination,
    carType,
    person,
  }

  const validationSchema = Yup.object().shape({
    source: Yup.string().required('Source is required'),
    destination: Yup.string().required('Destination is required'),
    carType: Yup.string().required('Car Type is required'),
    person: Yup.number()
      .required('Person is required')
      .max(4, 'Maximum 4 person can be selected'),
  })
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setSource(values.source)
        setDestination(values.destination)
        setCarType(values.carType)
        setPerson(values.person)
        setStepNo(2)
        setStepDescription(stepDescriptions[2])
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik
        return (
          <Form className="form-container">
            <div className="place-inputs">
              <Field
                className={
                  errors.source && touched.source ? 'input-error' : null
                }
                id="source"
                name="source"
                variant="Source*"
              />
              {errors.source}
              <Field
                className={
                  errors.destination && touched.destination
                    ? 'input-error'
                    : null
                }
                id="destination"
                name="destination"
              />
              {errors.destination}
            </div>
            <Field
              as="select"
              name="carType"
              className={
                errors.carType && touched.carType ? 'input-error' : null
              }
            >
              <option value="HatchBack">HatchBack</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </Field>
            <Field
              className={errors.person && touched.person ? 'input-error' : null}
              id="person"
              name="person"
              type="number"
              min={1}
              max={10}
            />
            {errors.person}
            <button
              type="submit"
              className={!(dirty && isValid) ? 'disabled-btn' : ''}
            >
              Enter Bid Details
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default JourneyForm
