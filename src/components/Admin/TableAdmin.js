import React from 'react'
import { Link } from 'react-router-dom';
import NotFoundData from '../Common/NotFoundData';

function TableAdmin({data}){
  const admins = data
  return(
      <div className="box">
      <div className="box-body table-responsive no-padding">
        <table className="table table-hover">
          <thead>
            <tr className='count_th'>
              <th>Id</th>
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
                    <Link to={"admin/"+cont.id+'/edit'}>{cont.id}</Link>
                  </td>
                  <td>
                    <Link to={"admin/"+cont.id+'/edit'}>{cont.fullname}</Link>
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