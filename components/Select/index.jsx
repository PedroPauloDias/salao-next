import React, {useState, useEffect} from 'react'
import * as S from "./style"
import axios from 'axios'




const Select = ({  handleChange, value }) => {
  
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/servicos/")
      .then((response) => {
        setServices(response.data)
    
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <S.Container>
      <label htmlFor="">Serviço</label>
      <S.InputSelect
        name="name"        
        onChange={handleChange}
       >
      <option >Selecione uma opção</option>
        {services.map((option) => (
          <option value={option.id} key={option.id}  >
            {option.name}
        </option>
      ))} 
      </S.InputSelect>
    </S.Container>
  )
}

export default Select;