import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NotFoundData from '../Common/NotFoundData';
import { getAdmins } from '../../apis/admins'; // Import the getUsers function from the API module

function TableAdmin(){
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    // Function to fetch users when component mounts
    const fetchAdmins = async () => {
      try {
        // Call the getUsers function from the API module
        const adminsData = await getAdmins();

        // Update state with the fetched admins
        setAdmins(adminsData);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    // Call the fetchUsers function when component mounts
    fetchAdmins();
  }, [])

  return(
      <div className="box">
      <div className="box-body table-responsive no-padding">
        <table className="table table-hover">
          <thead>
            <tr className='count_th'>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {admins ?
               admins.map(cont => (
                <tr key={cont.id}>
                  <td>
                    <Link to={"admin/"+cont.id+'/edit'} className="btn-xs btn btn-warning">{cont.fullname}</Link>
                  </td>
                  <td>{cont.phone}</td>
                  <td>{cont.email}</td>
                  <td>{cont.gender}</td>
                  <td>{cont.address}</td>
                  <td className="right">
                    <Link to={"admin/"+cont.id+'/edit'} className="btn-xs btn btn-warning">Edit</Link>
                  </td>
                </tr>
               ))
              : <NotFoundData /> }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableAdmin;