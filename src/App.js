import './App.css'
import { useContext } from 'react'
import { CarBookingContext } from './contexts/CarBookingContext'
import FormStepsHeader from './components/FormStepsHeader'
import PlaceBid from './components/PlaceBid'
import VerifyOTP from './components/VerifyOTP'
import SubmitForm from './components/SubmitForm'
import JourneyForm from './Form/JourneyForm'

function App() {
  const { stepNo, stepDescription } = useContext(CarBookingContext)
  return (
    <>
      <FormStepsHeader
        stepNo={stepNo}
        stepDescription={stepDescription}
        totalSteps={4}
      />
      {stepNo === 1 && <JourneyForm />}
      {stepNo === 2 && <PlaceBid />}
      {stepNo === 3 && <VerifyOTP />}
      {stepNo === 4 && <SubmitForm />}
    </>
  )
}

export default App
