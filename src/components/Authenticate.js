import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useStateContext from '../Hooks/useStateContext';
export default function Authenticate() {
  const {context} =useStateContext()

  return (
    context.participantId==0
    ?<Navigate to="/"/>
    :<Outlet/>
  )
}
