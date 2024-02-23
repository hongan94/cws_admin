import React, { useState, useEffect } from "react";
import Form from './Form'
import { useForm } from 'react-hook-form';
import { createAdmin } from '../../apis/admins'; // Import the getUsers function from the API module
import { toastSuccess, toastError } from '../../commons/Toast'; // Import the getUsers function from the API module
import { useNavigate } from 'react-router-dom';

function NewAdmin(){
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { navigate } = useNavigate()

  const onSubmit = async (data, event) => {
    try {
      const response = await createAdmin(data);
      if(response.status === 'error'){
        toastError(response.message.join(', '))
      }else{
        toastSuccess('Tạo admin thành công!')
        if(event.target.name == 'Lưu và tiếp tục'){
          reset();
        }else{
          navigate.push('/api/v1/admins')
        }
      }
    } catch (error) {
      toastError(error)
    }
  };  

  return(
    <div className="admin main content">
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />
    </div>
  )
}

export default NewAdmin;