import React from 'react'
import { Link } from 'react-router-dom'

function Update() {
  
  return (
    <div className='Update'>
      <h1>Update</h1>

      <Link to={`/`}>
      <button>수정 완료</button>
      <button>수정 취소</button>
      </Link>
    </div>
  )
}

export default Update