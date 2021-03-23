import React, { useState } from 'react'

function Check({ status }) {

  const [checked, setChecked] = useState(status)

  console.log(checked);

  return (
    <>
      <div className={checked ? "icon-done" : "icon-not-done"} onClick={() => setChecked(!checked)}>
        {checked ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" ><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg>
        ) : (
          null
        )}
      </div>
    </>
  )
}

export default Check
