import './style.css'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <p >Hola Mundo</p>

  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
