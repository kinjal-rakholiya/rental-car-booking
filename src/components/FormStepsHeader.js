import React from 'react'

export default function FormStepsHeader({
  stepNo,
  stepDescription,
  totalSteps,
}) {
  const headerText = `${stepDescription}(${stepNo}/${totalSteps} step)`
  return <div className="stepHeader">{headerText}</div>
}
