import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';

import {useAlbumContext} from '../../context/albumContext'
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';



const EditPhotoPage = () => {
  const {handleEditAlbum, fetchSingleAlbum, state, dispatch} = useAlbumContext()
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

    handleEditAlbum(photoId, formValue)

    history.goBack(-1)
  }

  const handleOnChange = (event) => {
    const {name, value} = event.target

    setFormValue(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

    
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
      type="text"
      value={formValue.title || ''}
      onChange={handleOnChange}
      name="title"
      >
      Title
      </Input>

      <Input 
      type="text" 
      value={formValue.category || ''}
      onChange={handleOnChange}
      name="category"
      >
      Category
      </Input>

      <Input 
      type="text" 
      onChange={handleOnChange}
      value={formValue.image || ''}
      name="image"
     >
      Image
      </Input>

      <Input 
      type="text" 
      onChange={handleOnChange}
      value={formValue.description || ''}
      name="description"
     >
      Description
      </Input>

    <Button type="submit">Edit Your Photo</Button>
  </Form>
  )
}

export default EditPhotoPage
