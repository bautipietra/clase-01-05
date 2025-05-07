import React from 'react'
import { useState } from 'react'

export const Formulario = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0
  })

  function manejarCambio(event) {
    const { name, value } = event.target
    setProducto((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function manejarEnvio(event) {
    event.preventDefault()
    alert(
      'Se creo el producto correctamente con el nombre: ' +
        producto.nombre +
        ', la descripcion: ' +
        producto.descripcion +
        '.... todo lo demás'
    )
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type='text'
        name='nombre'
        value={producto.nombre}
        onChange={manejarCambio}
      />
      <input
        type='text'
        name='descripcion'
        value={producto.descripcion}
        onChange={manejarCambio}
      />
      <input
        type='number'
        name='stock'
        value={producto.stock}
        onChange={manejarCambio}
      />
      <input
        type='number'
        name='precio'
        value={producto.precio}
        onChange={manejarCambio}
      />
      <button type='submit'>Crear producto</button>
    </form>
  )
}
