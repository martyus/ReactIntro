import React from 'react'

const Department = (props) => {
  return (
    <>
    <h2>Department name: {props.dept.dep_name}</h2>
    <h3>Team id: {props.dept.team_id}</h3>
    </>
  )
}

export default Department