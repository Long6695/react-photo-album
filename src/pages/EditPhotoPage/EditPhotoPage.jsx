import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';

import {useAlbumContext} from '../../context/albumContext'
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';



const EditPhotoPage = () => {
  const [error, setError] = useState({}) 
  const {handleEditAlbum, fetchSingleAlbum, state} = useAlbumContext()
  const {photoId} = useParams()
  const history = useHistory()
  const {album} = state
  const [formValue, setFormValue] = useState({
    title:'',
    image: '',
    category: '',
    description: '',
  })


  useEffect(() => {
    let mounted = true
    const fetchAlbum = async () => {
      await fetchSingleAlbum(photoId)
    }
    if(mounted) {
      fetchAlbum()
    }

    return () => {
      mounted = false
    }
    // eslint-disable-next-line 
  },[])

  useEffect(() => {
    setFormValue(album)
  },[album])

  
  const handleSubmit = (event) => {
    event.preventDefault()
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
      if(input.value === ''){
        const inputName = input.name
        setError(prev => {
          return {
            ...prev,
            [inputName] : true
          }
        })
      }
    })

    const errors = Object.keys(formValue).filter(
      (element) => !formValue[element]
    )
      console.log(errors)
    if(errors.length !== 0) return

    handleEditAlbum(photoId, formValue)

    history.goBack(-1)
  }


  const handleOnChange = (event) => {
    const {name, value} = event.target

    if(value !== ''){
      const newError = {...error}
      delete newError[name]
      setError(newError)
    }

    setFormValue(prev => {
      return {
        ...prev,
        [name]: value
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
      value={formValue.title || ''}
      onChange={handleOnChange}
      onBlur={onBlur}
      name="title"
      error={error.title && "Please Enter Title"}
      >
      Title
      </Input>

      <Input 
      type="text" 
      value={formValue.category || ''}
      onChange={handleOnChange}
      onBlur={onBlur}
      name="category"
      error={error.category && "Please Enter Title"}
      >
      Category
      </Input>

      <Input 
      type="text" 
      onChange={handleOnChange}
      value={formValue.image || ''}
      onBlur={onBlur}
      name="image"
      error={error.image && "Please Enter Title"}
     >
      Image
      </Input>

      <Input 
      type="text" 
      onChange={handleOnChange}
      onBlur={onBlur}
      value={formValue.description || ''}
      name="description"
      error={error.description && "Please Enter Title"}
     >
      Description
      </Input>

    <Button type="submit">Edit Your Photo</Button>
  </Form>
  )
}

export default EditPhotoPage
