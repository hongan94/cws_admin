import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Search from "../../components/Admin/Search";
import TableAdmin from "../../components/Admin/TableAdmin";
import { getAdmins, deleteAdmin } from '../../apis/admins'; 
import { toastSuccess, toastError } from '../../commons/Toast'; // Import the getUsers function from the API module

function ListAdmin(){
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const adminsData = await getAdmins();
        setAdmins(adminsData.data);
      } catch (error) {
        toastError(error)
      }
    };        
    fetchAdmins();
  }, [])

  const onDelete = async (id) => {
    try{
      const responseDelete = await deleteAdmin(id);
      setAdmins(admins.filter(admin => admin.id !== id));
      toastSuccess('Delete Admin thành công!')
    }catch(error){
      toastError(error)
    }
  }

  return(
    <div className="admin main content">
      <Search />
      <div className="create new" style={{marginTop: '10px'}}>
        <Link to="/admin/new" className= "btn btn-sm btn-success">Thêm</Link>
      </div>
      <TableAdmin data={admins} onDelete={onDelete}/>
    </div>
  )
}

export default ListAdmin;