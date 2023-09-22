import React from 'react'

const DivMeu = ({titulo, texto, description}) => {
    return(
    <div>
       <h1>{titulo}</h1>
        <h2>{texto}</h2>
        <p>{description}</p>
    </div>
    )
  }

export default DivMeu