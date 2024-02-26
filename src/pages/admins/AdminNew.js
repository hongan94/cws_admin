import React from "react";
import { useForm } from 'react-hook-form';
import { createAdmin } from '../../apis/admins'; // Import the getUsers function from the API module
import { toastSuccess, toastError } from '../../commons/Toast'; // Import the getUsers function from the API module
import { useNavigate } from 'react-router-dom';
import Form from "../../components/Admin/Form";

function NewAdmin(){
  const { register, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data, event) => {
    try {
      const response = await createAdmin(data);
      console.log(response)
      if(response.status === 'error'){
        toastError(response.message.join(', '))
      }else{
        toastSuccess('Tạo admin thành công!')
        if(event.nativeEvent.submitter.name === 'saveContinue'){
          reset();
        }else{
          navigate('/admins')
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