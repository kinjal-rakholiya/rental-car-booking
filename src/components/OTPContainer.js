import React, { useContext, useEffect } from 'react'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { CarBookingContext } from '../contexts/CarBookingContext'
import { stepDescriptions } from '../utils/constant'

export default function OTPContainer() {
  const { contact, setStepNo, setStepDescription } = useContext(
    CarBookingContext,
  )

  const ValueChangeListener = () => {
    let { submitForm, values } = useFormikContext()
    let flag = true
    useEffect(() => {
      Object.entries(values).map(
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ([_, inputVal], index) => (flag = flag && parseInt(inputVal, 10) === index+1),
      )
      if (flag) {
        submitRentalForm(values)
        setStepNo(4)
        setStepDescription(stepDescriptions[4])
      }
    }, [values, submitForm])
    return null
  }

  //On Edit click, it should open previous form
  function clickHandler() {
    setStepNo(2)
    setStepDescription(stepDescriptions[2])
  }

  const initialValues = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  }

  const validationSchema = Yup.object().shape({
    input1: Yup.number().required('Require').max(1, 'max 1 digit is required'),
    input2: Yup.number().required('Require').max(1, 'max 1 digit is required'),
    input3: Yup.number().required('Require').max(1, 'max 1 digit is required'),
    input4: Yup.number().required('Require').max(1, 'max 1 digit is required'),
  })

  const submitRentalForm = ({ input1, input2, input3, input4 }) => {}

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={submitRentalForm}
    >
      {({ values: { input1, input2, input3, input4 }, handleChange }) => {
        return (
          <>
            <div className="otp-container">
              We've sent OTP to your mobile number, Please enter it below <br />
              to submit your bid <b>{contact}</b>
              <span>
                <button className="edit-btn" onClick={clickHandler}>
                  <span>
                    <i className="fa fa-pencil"> Edit</i>
                  </span>
                </button>
              </span>
            </div>
            <div className="otp-inputs-container">
              <div className="otp-inputs-format">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  placeholder="0"
                  value={input1}
                  onChange={handleChange}
                />
                <hr />
              </div>

              <div className="otp-inputs-format">
                <input
                  type="text"
                  id="input2"
                  name="input2"
                  placeholder="0"
                  value={input2}
                  onChange={handleChange}
                />
                <hr />
              </div>

              <div className="otp-inputs-format">
                <input
                  type="text"
                  id="input3"
                  name="input3"
                  placeholder="0"
                  value={input3}
                  onChange={handleChange}
                />
                <hr />
              </div>

              <div className="otp-inputs-format">
                <input
                  type="text"
                  id="input4"
                  name="input4"
                  placeholder="0"
                  value={input4}
                  onChange={handleChange}
                />
                <hr />
              </div>
            </div>
            <ValueChangeListener />
          </>
        )
      }}
    </Formik>
  )
}
