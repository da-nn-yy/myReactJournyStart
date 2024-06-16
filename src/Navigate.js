import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navigate() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('http://www.github.com/da-nn-yy/')}>Go tu my github page</button>
    </div>
  )
}

export default Navigate
