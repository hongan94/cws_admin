import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Search from "../../components/Admin/Search";
import TableAdmin from "../../components/Admin/TableAdmin";
import { getAdmins } from '../../apis/admins'; 

function ListAdmin(){
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const adminsData = await getAdmins();
        setAdmins(adminsData.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };        
    fetchAdmins();
  }, [])
  return(
    <div className="admin main content">
      <Search />
      <div className="create new" style={{marginTop: '10px'}}>
        <Link to="/admin/new" className= "btn btn-sm btn-success">Thêm</Link>
      </div>
      <TableAdmin data={admins}/>
    </div>
  )
}

export default ListAdmin;