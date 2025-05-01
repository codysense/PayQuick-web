import React from 'react'
import LeaveForm from './../components/LeaveForm';
import { useAuth } from '../components/AuthContext';
import { getFormschema } from '../utils/FormValidation';


const LeaveRequest = () => {

    const {currentUser} = useAuth()
    const formSchema = getFormschema()
  return (
    <div>
        <LeaveForm currentUser={currentUser} formSchema={formSchema}/>

    </div>
  )
}

export default LeaveRequest