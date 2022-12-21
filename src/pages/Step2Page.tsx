import React from 'react'
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Step2Page = () => {
  const navigate= useNavigate()
  return (
    <div>Step 2 Page

<Button variant='primary' size='large' handleClick={() => navigate('/step-3')}>
                Next
            </Button>
    </div>
  )
}

export default Step2Page