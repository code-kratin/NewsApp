import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
    return (
      <div className='container text-center pt-5 mt-5'>
        <img src={loading} alt="loading" />
      </div>
    )
}
export default Spinner