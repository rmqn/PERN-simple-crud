import React, {  useState } from 'react'
import img from '../../assets/images/icon-check.svg'

function Check({ status }) {

  const [checked, setChecked] = useState(status)


  return (
    <>
      <div className={checked ? "icon-done" : "icon-not-done"} onClick={() => setChecked(!checked)}>
        {checked ? (
          // <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" ><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg>
          <img src={img} alt=""/>
        ) : (
          null
        )}
      </div>
    </>
  )
}

export default Check
