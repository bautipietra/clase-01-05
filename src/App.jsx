import { useState } from 'react'

function App() {
  let num1 = 0
  let num2 = 0
  let op = '+'
  const [Resultado, setResultado] = useState(0)

  function cambiarNumUno(evento) {
    num1 = Number(evento.target.value)
  }

  function cambiarNumDos(evento) {
    num2 = Number(evento.target.value)
  }

  function cambiarOperador(evento) {
    op = evento.target.value
  }

  function calcularResultado() {
    if (op == '+') {
      setResultado(num1 + num2)
    } else if (op == '-') {
      setResultado(num1 - num2)
    } else if (op == '/') {
      setResultado(num1 / num2)
    } else {
      setResultado(num1 * num2)
    }
  }

  return (
    <div>
      <input type='number' onChange={cambiarNumUno} />
      <select name='operador' id='' onChange={cambiarOperador}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='/'>/</option>
        <option value='*'>*</option>
      </select>
      <input type='number' onChange={cambiarNumDos} />
      <button onClick={calcularResultado}>Calcular</button>
      <span>Resultado: {Resultado}</span>
    </div>
  )
}

export default App
