import React from 'react'
import { Link } from 'react-router-dom'

export default function WhoAmI() {
  return (
    <div>
        <Link to="instructor/login">Instructor</Link>
        <Link to="student/login">Student</Link>
    </div>
  )
}
