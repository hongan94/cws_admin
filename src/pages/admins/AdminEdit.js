import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { updateAdmin, detailAdmin } from '../../apis/admins'; // Import the getUsers function from the API module
import { toastSuccess, toastError } from '../../commons/Toast'; // Import the getUsers function from the API module
import { useNavigate, useParams} from 'react-router-dom';
import Form from "../../components/Admin/Form";

function UpdateAdmin(){
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate()
  const {id} = useParams()
  const [admin, setAdmin] = useState({})

  const onSubmit = async (data, event) => {
    try {
      const response = await updateAdmin(id, data);
      if(response.status === 'error'){
        toastError(response.message.join(', '))
      }else{
        console.log(response.data)
        toastSuccess('Cập nhật thành công!')
        if(event.nativeEvent.submitter.name === 'saveContinue'){
          setAdmin(response.data)
        }else{
          navigate('/admins')
        }
      }
    } catch (error) {
      toastError(error)
    }
  };  
  useEffect(() => {
    const adminDetail = async () => {
      try {
        const response = await detailAdmin(id);
        console.log(response.data)
        if(response.status === 'error'){
          toastError(response.message.join(', '))
        }else{
          const fieldsToSet = ['id', 'fullname', 'status', 'phone', 'email', 'role', ];
          setAdmin(response.data)
          fieldsToSet.forEach(fieldName => {
            setValue(fieldName, response.data[fieldName]);
          });
        }
      }catch(error){
        toastError(error)
      }
    };
    adminDetail()
  }, [id]);

  return(
    <div className="admin main content">
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} admin={admin}/>
    </div>
  )
}

export default UpdateAdmin;