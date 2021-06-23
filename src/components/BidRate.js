import React, { useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { CarBookingContext } from '../contexts/CarBookingContext'
import { stepDescriptions } from '../utils/constant'

export default function BidRate() {
  const {
    bidAmount,
    setBidAmount,
    contact,
    setContact,
    rateNegotiable,
    setRateNegotiable,
    getUpdate,
    setGetUpdate,
    setStepNo,
    setStepDescription,
  } = useContext(CarBookingContext)

  const initialValues = {
    bidAmount,
    contact,
    rateNegotiable,
    getUpdate,
  }

  const validationSchema = Yup.object().shape({
    bidAmount: Yup.number().required('Amount is required and It should be in digits'),
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setBidAmount(values.bidAmount)
        setContact(values.contact)
        setRateNegotiable(values.rateNegotiable)
        setGetUpdate(values.getUpdate)
        setStepNo(3)
        setStepDescription(stepDescriptions[3])
      }}
    >
      {(formik) => {
        const { errors, isValid, dirty } = formik
        return (
          <Form>
            <div className="bid-input">
              <div className="amount">
                <Field
                  type="number"
                  id="bidAmount"
                  name="bidAmount"
                  placeholder="$0"
                />
                <div>{errors.bidAmount}</div>
              </div>
              <label>
                <Field type="checkbox" name="rateNegotiable" />
                &nbsp; Rate Negotiable
              </label>
            </div>
            <hr />
            <div className="bid-input">
              <div className="contact-input">
                <Field
                  id="contact"
                  name="contact"
                  type="textarea"
                />
              </div>
              <div className="contact-input get-update">
                <label>
                  <Field type="checkbox" name="getUpdate" />
                  &nbsp; Get Update on Whatsapp!
                </label>
              </div>
            </div>
            <button
              type="submit"
              id="submit"
              className={!(dirty && isValid) ? 'disabled-btn' : ''}
            >
              Next
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
