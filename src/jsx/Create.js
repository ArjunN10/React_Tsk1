import React from 'react'

function Create() {
    const name="Arjun"
    const a=10
    const b=50
  return (
    <div className='welcom'>Hy! ia'm {name}
    <div>
    <br/>
    <h4>
    --------sum the two values----------<br />
    value of a={a}<br/>
    value of b={b}<br/>
    The sum value={a+b}
    </h4>
    </div>
    </div>
  )
}

export default Create