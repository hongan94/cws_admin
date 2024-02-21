import React from 'react';
import { useEffect } from 'react';

function NotFoundData(){
  useEffect(() => {
    // Sử dụng document.querySelector để chọn phần tử HTML
    const countTh = document.querySelectorAll('.count_th th').length;
    // Sử dụng thuộc tính colSpan của phần tử HTML để thiết lập số lượng cột của cell
    document.querySelector('.not_found_data').colSpan = countTh;
  }, []); // Thêm [] để useEffect chỉ gọi một lần sau khi component được render

  return(
    <>
      <tr>
      <td className='not_found_data' style={{textAlign: 'center'}}>
        <h3>Not Found</h3>
      </td>
    </tr>
    </>
  )
}

export default NotFoundData;