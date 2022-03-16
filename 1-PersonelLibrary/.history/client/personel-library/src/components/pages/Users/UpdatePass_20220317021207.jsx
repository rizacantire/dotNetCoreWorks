import React from 'react'

export default function UpdatePass({updateUser}) {
  return (
    <div>
        {updateUser.email}
        {updateUser.password}
    </div>
  )
}
