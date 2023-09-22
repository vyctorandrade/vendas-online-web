import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DivMeu from './components/DivMeu'


function App() {
  
  return (
    <div>
    <DivMeu titulo = 'Mundo novo pirata' texto = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quisquam consectetur amet neque ratione sequi? Ea velit quia aspernatur temporibus exercitationem labore eligendi rem vero voluptatibus voluptatem sint, veritatis illum.' />
    <DivMeu titulo = 'Maria' description='Aqui consta os dados da pirata Maria'/> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, minus. Eius adipisci consequuntur rerum? Enim ullam fugit doloribus quibusdam labore. Numquam, ut saepe? Nemo inventore earum eum animi eveniet recusandae?</p>


    </div>
  )
}

export default App
