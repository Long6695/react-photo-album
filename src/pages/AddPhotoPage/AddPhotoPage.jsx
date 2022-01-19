import React, {useState} from 'react'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import {useAlbumContext} from '../../context/albumContext'
import { useHistory } from 'react-router-dom';

const AddPhotoPage = () => {
  const history = useHistory()
  const [valueForm, setValueForm] = useState({
    id: Date.now(),
    createdAt: Date.now(),
    image: '',
    title:'',
    category:'',
    description:'',
  })

  const [error, setError] = useState({}) 

  const {handleAddAlbum} = useAlbumContext()

  const handleSubmit = (event) => {

    event.preventDefault()
    
    const inputs = [...document.querySelectorAll('input')]

    inputs.forEach(element =>{

      if(element.value === '') {
        const inputName = element.name
        setError(prev => {
          return {
            ...prev,
            [inputName] : true
          }
        })
      }
    })

    const errors = Object.keys(valueForm).filter(
      (element) => !valueForm[element]
    )

    if(errors.length !== 0) return
    
    handleAddAlbum(valueForm)

    history.goBack(-1)
  }

  const onChange = (event) => {
    const {value, name} = event.target

    if(value !== ''){
      const newError = {...error}
      delete newError[name]
      setError(newError)
    }

  
    setValueForm(prev => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const onBlur = (event) => {
    const {value, name} = event.target 

    if (value !== '') return

    setError(prev => {
      return {
        ...prev,
        [name] : true,
      }
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input 
      type="text" 
      onChange={onChange} 
      onBlur={onBlur} 
      name="title" 
      value={valueForm.title} 
      error={error.title && "Please Enter Title"}>
      Title
      </Input>

      <Input 
      type="text" 
      onChange={onChange} 
      onBlur={onBlur} name="category" 
      value={valueForm.category} 
      error={error.category && "Please Enter Category"}>
      Category
      </Input>

      <Input 
      type="text" 
      onChange={onChange} 
      onBlur={onBlur} name="image" 
      value={valueForm.image} 
      error={error.image && "Please Enter Image"}>
      Image
      </Input>

      <Input 
      type="text" 
      onChange={onChange} 
      onBlur={onBlur} 
      name="description" 
      value={valueForm.description} 
      error={error.description && "Please Enter Description"}>
      Description
      </Input>

      <Button type="submit">Post Your Photo</Button>
    </Form>
  )
}

export default AddPhotoPage

