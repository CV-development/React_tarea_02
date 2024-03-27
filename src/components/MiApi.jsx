// Código para consumir la API
import { useEffect, useState } from 'react'

const MiApi = ({ dataFechas }) => {
  const [info, setInfo] = useState([]) // Guarda la información traída de la API

  useEffect(() => {
    const llamarApi = async () => {
      const url = 'https://api.victorsanmartin.com/feriados/en.json'
      const response = await fetch(url)
      const { data } = await response.json()
      setInfo(data)
      dataFechas(info) // Llamar al callback con los datos de la API
    }

    llamarApi()
  }, [dataFechas])

  return (
    <></>
  )
}

export default MiApi
